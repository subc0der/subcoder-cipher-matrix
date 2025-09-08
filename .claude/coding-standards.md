# Coding Standards & Copilot Guidelines

## Core Principles
- **DRY (Don't Repeat Yourself)**: Extract common logic into reusable functions
- **SOLID Principles**: Follow Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion
- **Clean Code**: Write self-documenting code with meaningful names
- **Type Safety**: Leverage TypeScript's type system fully

## TypeScript Best Practices

### Type Definitions
```typescript
// ✅ Good - Explicit types
interface CipherConfig {
  name: string;
  key: string;
  algorithm: CipherAlgorithm;
  options?: CipherOptions;
}

// ❌ Avoid - Any types
function processCipher(data: any): any { }
```

### Null Safety
```typescript
// ✅ Good - Handle nullish values
const result = value?.property ?? defaultValue;

// ❌ Avoid - Unchecked access
const result = value.property; // Could throw if value is null
```

### Const Assertions & Enums
```typescript
// ✅ Good - Use const assertions for literal types
const CIPHER_TYPES = {
  CAESAR: 'caesar',
  VIGENERE: 'vigenere',
  AES: 'aes'
} as const;

type CipherType = typeof CIPHER_TYPES[keyof typeof CIPHER_TYPES];
```

## React Best Practices

### Component Structure
```typescript
// ✅ Good - Functional component with proper typing
interface CipherComponentProps {
  cipher: Cipher;
  onEncode: (text: string) => void;
  isLoading?: boolean;
}

export const CipherComponent: React.FC<CipherComponentProps> = ({ 
  cipher, 
  onEncode, 
  isLoading = false 
}) => {
  // Component logic
};
```

### Hooks Usage
```typescript
// ✅ Good - Custom hooks for logic separation
const useCipherOperation = (cipherType: CipherType) => {
  const [result, setResult] = useState<string>('');
  const [error, setError] = useState<Error | null>(null);
  
  const execute = useCallback(async (input: string) => {
    try {
      setError(null);
      const output = await processCipher(cipherType, input);
      setResult(output);
    } catch (err) {
      setError(err as Error);
    }
  }, [cipherType]);
  
  return { result, error, execute };
};
```

### State Management
```typescript
// ✅ Good - Immutable state updates
setState(prev => ({
  ...prev,
  newProperty: value
}));

// ❌ Avoid - Direct mutations
state.property = value; // Never mutate state directly
```

## Common Copilot Issues & Solutions

### 1. Missing Error Handling
```typescript
// ✅ Good - Comprehensive error handling
try {
  const result = await fetchData();
  return processResult(result);
} catch (error) {
  console.error('Operation failed:', error);
  // Proper error recovery or propagation
  throw new CustomError('Failed to process data', { cause: error });
}
```

### 2. Security Vulnerabilities
```typescript
// ✅ Good - Input validation
const sanitizeInput = (input: string): string => {
  return input.replace(/[<>]/g, ''); // Example sanitization
};

// ❌ Avoid - Direct DOM manipulation with user input
element.innerHTML = userInput; // XSS vulnerability
```

### 3. Performance Issues
```typescript
// ✅ Good - Memoization for expensive operations
const expensiveResult = useMemo(() => {
  return computeExpensiveValue(input);
}, [input]);

// ✅ Good - Debounced event handlers
const debouncedSearch = useMemo(
  () => debounce(handleSearch, 300),
  [handleSearch]
);
```

### 4. Accessibility
```typescript
// ✅ Good - Proper ARIA attributes
<button
  aria-label="Encode message"
  aria-busy={isLoading}
  disabled={isLoading}
>
  {isLoading ? 'Processing...' : 'Encode'}
</button>
```

### 5. Testing Coverage
```typescript
// ✅ Good - Comprehensive test cases
describe('CipherEncoder', () => {
  it('should encode text correctly', () => {
    expect(encode('hello', 'key')).toBe('encoded');
  });
  
  it('should handle empty input', () => {
    expect(encode('', 'key')).toBe('');
  });
  
  it('should throw on invalid key', () => {
    expect(() => encode('text', '')).toThrow('Invalid key');
  });
});
```

## Code Organization

### File Structure
```
src/
├── components/
│   ├── common/          # Shared components
│   ├── ciphers/         # Cipher-specific components
│   └── layouts/         # Layout components
├── hooks/               # Custom React hooks
├── utils/
│   ├── ciphers/         # Cipher implementations
│   ├── validation/      # Input validation
│   └── helpers/         # Helper functions
├── types/               # TypeScript type definitions
├── constants/           # App constants
└── services/            # API and external services
```

### Import Order
```typescript
// 1. React imports
import React, { useState, useEffect } from 'react';

// 2. Third-party libraries
import { debounce } from 'lodash';

// 3. Internal absolute imports
import { CipherService } from '@/services/cipher';

// 4. Internal relative imports
import { CipherCard } from './CipherCard';

// 5. Types
import type { CipherConfig } from '@/types';

// 6. Styles
import styles from './styles.module.css';
```

## Async/Await Best Practices
```typescript
// ✅ Good - Proper async error handling
const processMultipleCiphers = async (
  texts: string[]
): Promise<ProcessResult[]> => {
  const results = await Promise.allSettled(
    texts.map(text => processCipher(text))
  );
  
  return results.map(result => {
    if (result.status === 'fulfilled') {
      return { success: true, data: result.value };
    }
    return { success: false, error: result.reason };
  });
};
```

## Common Patterns to Follow

### 1. Guard Clauses
```typescript
function processData(data: Data | null): Result {
  // Early returns for invalid cases
  if (!data) {
    throw new Error('Data is required');
  }
  
  if (!isValidData(data)) {
    throw new Error('Invalid data format');
  }
  
  // Main logic here
  return transformData(data);
}
```

### 2. Builder Pattern for Complex Objects
```typescript
class CipherBuilder {
  private config: Partial<CipherConfig> = {};
  
  withAlgorithm(algorithm: string): this {
    this.config.algorithm = algorithm;
    return this;
  }
  
  withKey(key: string): this {
    this.config.key = key;
    return this;
  }
  
  build(): CipherConfig {
    if (!this.config.algorithm || !this.config.key) {
      throw new Error('Missing required configuration');
    }
    return this.config as CipherConfig;
  }
}
```

### 3. Factory Pattern for Cipher Creation
```typescript
const cipherFactory = {
  create(type: CipherType): Cipher {
    switch (type) {
      case 'caesar':
        return new CaesarCipher();
      case 'vigenere':
        return new VigenereCipher();
      default:
        throw new Error(`Unknown cipher type: ${type}`);
    }
  }
};
```

## Performance Guidelines

### 1. Lazy Loading
```typescript
const CipherVisualization = lazy(() => import('./CipherVisualization'));
```

### 2. Virtual Scrolling for Large Lists
```typescript
// Use react-window or react-virtualized for large cipher lists
import { FixedSizeList } from 'react-window';
```

### 3. Web Workers for Heavy Computation
```typescript
// Move cipher processing to web workers for non-blocking UI
const worker = new Worker('/cipher-worker.js');
worker.postMessage({ type: 'encode', data: largeText });
```

## Security Considerations

### 1. Never Store Sensitive Data in State
```typescript
// ❌ Avoid
const [privateKey, setPrivateKey] = useState(key);

// ✅ Good - Use secure storage or keep in memory briefly
const processWithKey = (key: string) => {
  // Use immediately and don't store
  const result = encrypt(data, key);
  // Clear from memory
  key = '';
  return result;
};
```

### 2. Content Security Policy
```typescript
// Configure CSP headers
const cspDirectives = {
  'default-src': ["'self'"],
  'script-src': ["'self'", "'unsafe-inline'"],
  'style-src': ["'self'", "'unsafe-inline'"],
};
```

### 3. Input Validation
```typescript
const validateCipherInput = (input: unknown): string => {
  if (typeof input !== 'string') {
    throw new TypeError('Input must be a string');
  }
  
  if (input.length > MAX_INPUT_LENGTH) {
    throw new RangeError('Input exceeds maximum length');
  }
  
  // Additional validation as needed
  return input;
};
```

## Copilot-Specific Guidelines

### 1. Always Provide Context
```typescript
/**
 * Encrypts text using the specified cipher algorithm
 * @param text - The plaintext to encrypt
 * @param key - The encryption key
 * @param algorithm - The cipher algorithm to use
 * @returns The encrypted ciphertext
 * @throws {InvalidKeyError} If the key is invalid for the algorithm
 */
export function encryptText(
  text: string,
  key: string,
  algorithm: CipherAlgorithm
): string {
  // Implementation
}
```

### 2. Use Descriptive Variable Names
```typescript
// ✅ Good - Clear intent
const isEncryptionSuccessful = result.status === 'success';
const cipherTextOutput = encoder.process(plainTextInput);

// ❌ Avoid - Ambiguous names
const flag = result.status === 'success';
const output = encoder.process(input);
```

### 3. Consistent Error Messages
```typescript
class CipherError extends Error {
  constructor(
    message: string,
    public code: string,
    public details?: unknown
  ) {
    super(message);
    this.name = 'CipherError';
  }
}

// Consistent error creation
throw new CipherError(
  'Failed to decode cipher text',
  'DECODE_ERROR',
  { input: cipherText }
);
```

### 4. Avoid Magic Numbers
```typescript
// ✅ Good - Named constants
const MAX_KEY_LENGTH = 256;
const DEFAULT_ITERATIONS = 10000;
const SALT_BYTES = 32;

// ❌ Avoid - Magic numbers
if (key.length > 256) { }
```

### 5. Proper Cleanup
```typescript
useEffect(() => {
  const subscription = cipherService.subscribe(handleUpdate);
  
  // Always return cleanup function
  return () => {
    subscription.unsubscribe();
  };
}, [handleUpdate]);
```

## Common Copilot Warnings & Fixes

### Warning: Missing Return Type
```typescript
// ❌ Copilot will flag
function calculate(a, b) {
  return a + b;
}

// ✅ Fixed
function calculate(a: number, b: number): number {
  return a + b;
}
```

### Warning: Potential Null Reference
```typescript
// ❌ Copilot will flag
const length = text.length;

// ✅ Fixed
const length = text?.length ?? 0;
```

### Warning: Unhandled Promise Rejection
```typescript
// ❌ Copilot will flag
fetchData().then(handleData);

// ✅ Fixed
fetchData()
  .then(handleData)
  .catch(error => {
    console.error('Failed to fetch data:', error);
    // Handle error appropriately
  });
```

### Warning: Missing Dependencies in useEffect
```typescript
// ❌ Copilot will flag
useEffect(() => {
  processData(value);
}, []); // Missing 'value' dependency

// ✅ Fixed
useEffect(() => {
  processData(value);
}, [value]);
```

### Warning: Console Statements in Production Code
```typescript
// ❌ Copilot will flag - Console logs in production
console.log('Debug information');
console.error('Error details');

// ✅ Fixed - Development-only logging
function isDevelopmentMode() {
  return window.location.hostname === 'localhost' || 
         window.location.hostname === '127.0.0.1' || 
         window.location.protocol === 'file:';
}

if (isDevelopmentMode()) {
  console.log('Debug information');
  console.error('Error details');
}
```

### Warning: Console Styling Not Supported in All Environments
```typescript
// ❌ Copilot will flag - %c styling not universally supported
console.log('%cStyled message', 'color: #ff0000; font-weight: bold;');

// ✅ Fixed - Simple console logging
console.log('Styled message');
```

### Warning: Inline Styles Should Be Extracted to CSS
```html
<!-- ❌ Copilot will flag - Inline styles -->
<div style="color: #fff; padding: 10px; margin: 5px;">Content</div>

<!-- ✅ Fixed - CSS classes -->
<div class="info-box">Content</div>

<style>
.info-box {
  color: #fff;
  padding: 10px;
  margin: 5px;
}
</style>
```

### Warning: Magic Numbers Should Be Named Constants
```javascript
// ❌ Copilot will flag - Magic numbers
if (text.length > 10000) {
  showError('Text too long');
}

// ✅ Fixed - Named constants
const APP_CONSTANTS = {
  MAX_INPUT_LENGTH: 10000,
  BINARY_CHUNK_SIZE: 8
};

if (text.length > APP_CONSTANTS.MAX_INPUT_LENGTH) {
  showError('Text too long');
}
```

### Warning: Code Duplication Should Be Eliminated
```javascript
// ❌ Copilot will flag - Duplicate implementations
// File 1: main.js
function encrypt(text) { /* implementation */ }

// File 2: test.js  
function encrypt(text) { /* same implementation */ }

// ✅ Fixed - Shared module
// shared/cipher.js
export function encrypt(text) { /* implementation */ }

// main.js
import { encrypt } from './shared/cipher.js';

// test.js
const { encrypt } = require('./shared/cipher.js');
```

## Git Commit Standards
```
feat: Add new cipher algorithm
fix: Resolve encoding issue in Caesar cipher
docs: Update API documentation
style: Format code with Prettier
refactor: Extract cipher logic to separate module
test: Add unit tests for Vigenere cipher
chore: Update dependencies
perf: Optimize cipher processing for large texts
```

## Review Checklist
- [ ] No `any` types used
- [ ] All functions have explicit return types
- [ ] Error handling implemented for all async operations
- [ ] Input validation for user-provided data
- [ ] No hardcoded secrets or sensitive data
- [ ] Components are accessible (ARIA attributes)
- [ ] Tests cover happy path and edge cases
- [ ] No console.log statements in production code
- [ ] Dependencies are up to date
- [ ] Code follows established patterns