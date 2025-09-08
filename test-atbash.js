/**
 * Atbash Cipher Test Script
 * Run with: node test-atbash.js
 */

// Atbash cipher implementation
function applyAtbashCipher(text) {
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const charCode = char.charCodeAt(0);
            
            if (char >= 'A' && char <= 'Z') {
                // Uppercase: 155 - charCode
                return String.fromCharCode(155 - charCode);
            } else if (char >= 'a' && char <= 'z') {
                // Lowercase: 219 - charCode
                return String.fromCharCode(219 - charCode);
            }
        }
        return char;
    }).join('');
}

// Color codes for terminal output
const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    cyan: '\x1b[36m',
    yellow: '\x1b[33m',
    bold: '\x1b[1m'
};

// Test cases
const testCases = [
    { input: 'HELLO WORLD', expected: 'SVOOL DLIOW', description: 'Uppercase text' },
    { input: 'hello world', expected: 'svool dliow', description: 'Lowercase text' },
    { input: 'ABC', expected: 'ZYX', description: 'First letters → Last letters' },
    { input: 'xyz', expected: 'cba', description: 'Last letters → First letters' },
    { input: 'The quick brown fox', expected: 'Gsv jfrxp yildm ulc', description: 'Mixed case sentence' },
    { input: '123 Test!', expected: '123 Gvhg!', description: 'Numbers and punctuation preserved' },
    { input: 'AaBbCc', expected: 'ZzYyXx', description: 'Alternating case' },
    { input: 'Atbash Cipher', expected: 'Zgyzhs Xrksvi', description: 'Cipher name itself' },
    { input: '', expected: '', description: 'Empty string' },
    { input: '   ', expected: '   ', description: 'Spaces only' },
    { input: '!@#$%^&*()', expected: '!@#$%^&*()', description: 'Special characters only' },
    { input: '0123456789', expected: '0123456789', description: 'Numbers only' }
];

console.log(`${colors.bold}${colors.cyan}═══════════════════════════════════════════${colors.reset}`);
console.log(`${colors.bold}${colors.cyan}     ATBASH CIPHER TEST SUITE${colors.reset}`);
console.log(`${colors.bold}${colors.cyan}═══════════════════════════════════════════${colors.reset}\n`);

let passCount = 0;
let failCount = 0;

// Run tests
testCases.forEach((test, index) => {
    const result = applyAtbashCipher(test.input);
    const passed = result === test.expected;
    
    if (passed) {
        passCount++;
        console.log(`${colors.green}✓${colors.reset} Test ${(index + 1).toString().padStart(2, '0')}: ${test.description}`);
    } else {
        failCount++;
        console.log(`${colors.red}✗${colors.reset} Test ${(index + 1).toString().padStart(2, '0')}: ${test.description}`);
        console.log(`  Input:    "${test.input}"`);
        console.log(`  Expected: "${test.expected}"`);
        console.log(`  Got:      "${result}"`);
    }
});

// Reversibility test
console.log(`\n${colors.bold}${colors.yellow}Reversibility Test:${colors.reset}`);
const testStrings = [
    'Hello World!',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    'abcdefghijklmnopqrstuvwxyz',
    'The Quick Brown Fox Jumps Over The Lazy Dog 123!'
];

let reversiblePassed = true;
testStrings.forEach(original => {
    const encoded = applyAtbashCipher(original);
    const decoded = applyAtbashCipher(encoded);
    const isReversible = original === decoded;
    
    if (isReversible) {
        console.log(`${colors.green}✓${colors.reset} "${original}" → "${encoded}" → "${decoded}"`);
    } else {
        console.log(`${colors.red}✗${colors.reset} "${original}" failed reversibility test`);
        reversiblePassed = false;
    }
});

// Summary
console.log(`\n${colors.bold}${colors.cyan}═══════════════════════════════════════════${colors.reset}`);
console.log(`${colors.bold}SUMMARY:${colors.reset}`);
console.log(`  Tests Passed: ${colors.green}${passCount}${colors.reset}`);
console.log(`  Tests Failed: ${colors.red}${failCount}${colors.reset}`);
console.log(`  Reversibility: ${reversiblePassed ? colors.green + 'PASSED' : colors.red + 'FAILED'}${colors.reset}`);
console.log(`  Overall: ${passCount === testCases.length && reversiblePassed ? colors.green + 'ALL TESTS PASSED! 🎉' : colors.red + 'SOME TESTS FAILED'}${colors.reset}`);
console.log(`${colors.bold}${colors.cyan}═══════════════════════════════════════════${colors.reset}`);

// Alphabet mapping display
console.log(`\n${colors.bold}${colors.yellow}Atbash Alphabet Mapping:${colors.reset}`);
console.log('A↔Z  B↔Y  C↔X  D↔W  E↔V  F↔U  G↔T  H↔S  I↔R  J↔Q');
console.log('K↔P  L↔O  M↔N  N↔M  O↔L  P↔K  Q↔J  R↔I  S↔H  T↔G');
console.log('U↔F  V↔E  W↔D  X↔C  Y↔B  Z↔A');

// Exit with appropriate code
process.exit(failCount > 0 || !reversiblePassed ? 1 : 0);