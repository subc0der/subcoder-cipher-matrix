# Copilot Common Issues & Prevention Guide

## Most Frequent Copilot Warnings

### 1. Type Safety Issues
**What Copilot Flags:**
- Missing type annotations
- Use of `any` type
- Implicit any in function parameters
- Missing return types

**Prevention:**
```typescript
// tsconfig.json strict settings
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

### 2. Null/Undefined Handling
**What Copilot Flags:**
- Potential null pointer exceptions
- Missing null checks
- Unsafe property access

**Prevention:**
```typescript
// Always use optional chaining and nullish coalescing
const value = obj?.property?.nested ?? defaultValue;

// Type guards for runtime safety
function isValidCipher(cipher: unknown): cipher is Cipher {
  return cipher !== null && 
         typeof cipher === 'object' && 
         'encode' in cipher;
}
```

### 3. Unhandled Promises
**What Copilot Flags:**
- Floating promises
- Missing error handling in async functions
- No catch blocks

**Prevention:**
```typescript
// Always handle promise errors
async function safeCipherOperation(): Promise<Result> {
  try {
    const result = await performOperation();
    return { success: true, data: result };
  } catch (error) {
    logger.error('Operation failed', error);
    return { success: false, error: error.message };
  }
}

// For fire-and-forget operations
void asyncOperation().catch(console.error);
```

### 4. React Hook Dependencies
**What Copilot Flags:**
- Missing dependencies in useEffect/useMemo/useCallback
- Stale closures
- Unnecessary dependencies

**Prevention:**
```typescript
// Use ESLint exhaustive-deps rule
const memoizedValue = useMemo(
  () => computeExpensive(a, b),
  [a, b] // All dependencies listed
);

// Stable references for callbacks
const stableCallback = useCallback(
  (data: Data) => processData(data, config),
  [config] // Only include what changes
);
```

### 5. Security Vulnerabilities
**What Copilot Flags:**
- XSS vulnerabilities
- SQL injection risks
- Hardcoded secrets
- Unsafe regex

**Prevention:**
```typescript
// Input sanitization
const sanitized = DOMPurify.sanitize(userInput);

// Parameterized queries (if using a database)
const query = 'SELECT * FROM ciphers WHERE id = ?';

// Environment variables for secrets
const apiKey = process.env.CIPHER_API_KEY;

// Safe regex with timeout
const safeRegex = new RegExp(pattern, 'g');
```

### 6. Performance Issues
**What Copilot Flags:**
- Inefficient algorithms (O(n²) or worse)
- Memory leaks
- Unnecessary re-renders
- Large bundle sizes

**Prevention:**
```typescript
// Memoization for expensive computations
const CipherDisplay = memo(({ cipher }) => {
  const processed = useMemo(
    () => processCipher(cipher),
    [cipher.id] // Only re-compute when ID changes
  );
  return <div>{processed}</div>;
});

// Cleanup subscriptions
useEffect(() => {
  const sub = service.subscribe(handler);
  return () => sub.unsubscribe(); // Always cleanup
}, []);
```

### 7. Accessibility Issues
**What Copilot Flags:**
- Missing ARIA labels
- Incorrect semantic HTML
- No keyboard navigation
- Missing alt text

**Prevention:**
```typescript
// Proper ARIA attributes
<button
  role="button"
  aria-label={`Encode using ${cipherName}`}
  aria-pressed={isActive}
  tabIndex={0}
  onKeyDown={handleKeyPress}
>
  Encode
</button>

// Semantic HTML
<main>
  <article>
    <header>
      <h1>Cipher Tool</h1>
    </header>
    <section aria-labelledby="cipher-input">
      {/* Content */}
    </section>
  </article>
</main>
```

### 8. Testing Gaps
**What Copilot Flags:**
- Low test coverage
- Missing edge case tests
- No error scenario tests

**Prevention:**
```typescript
describe('CipherEncoder', () => {
  // Happy path
  it('encodes text correctly', () => {});
  
  // Edge cases
  it('handles empty input', () => {});
  it('handles special characters', () => {});
  it('handles maximum length input', () => {});
  
  // Error cases
  it('throws on invalid key', () => {});
  it('handles network errors gracefully', () => {});
});
```

## Automated Prevention Setup

### ESLint Configuration
```json
{
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  "rules": {
    "@typescript-eslint/explicit-return-type": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "react-hooks/exhaustive-deps": "error",
    "no-console": ["error", { "allow": ["warn", "error"] }]
  }
}
```

### Pre-commit Hooks
```json
// package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "prettier --write",
      "jest --bail --findRelatedTests"
    ]
  }
}
```

### VS Code Settings
```json
// .vscode/settings.json
{
  "typescript.tsdk": "node_modules/typescript/lib",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.includePackageJsonAutoImports": "on",
  "typescript.updateImportsOnFileMove.enabled": "always"
}
```

## Quick Fixes for Common Issues

### Issue: "Object is possibly 'null'"
```typescript
// Quick fix: Add null check
if (element) {
  element.focus();
}

// Or use optional chaining
element?.focus();
```

### Issue: "Missing return statement"
```typescript
// Quick fix: Ensure all paths return
function getValue(condition: boolean): string {
  if (condition) {
    return "value";
  }
  return "default"; // Add this
}
```

### Issue: "Unused variable"
```typescript
// Quick fix: Prefix with underscore if intentionally unused
function handler(_event: Event, data: Data) {
  // Use data but not event
}
```

### Issue: "Promises must be handled"
```typescript
// Quick fix: Add void for fire-and-forget
void asyncFunction();

// Or handle properly
asyncFunction().catch(handleError);
```

## Copilot Review Optimization Tips

1. **Run linters before committing**: Fix all linting issues locally
2. **Use strict TypeScript**: Enable all strict checks
3. **Write tests first**: TDD helps catch issues early
4. **Document complex logic**: Add JSDoc comments for clarity
5. **Keep functions small**: Single responsibility principle
6. **Use type guards**: Runtime type checking for external data
7. **Implement error boundaries**: Catch React component errors
8. **Profile performance**: Use React DevTools Profiler
9. **Check bundle size**: Use webpack-bundle-analyzer
10. **Regular dependency updates**: Keep packages current

## CI/CD Integration
```yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm run test:coverage
      - run: npm run build
```

This setup will catch most issues before Copilot review!