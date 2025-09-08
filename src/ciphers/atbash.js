/**
 * Atbash Cipher Implementation Module
 * Shared implementation to prevent code duplication
 */

/**
 * Application constants (duplicated from main app for Node.js compatibility)
 */
const CIPHER_CONSTANTS = {
    UPPERCASE_A_CODE: 65,       // ASCII code for 'A'
    UPPERCASE_Z_CODE: 90,       // ASCII code for 'Z'
    LOWERCASE_A_CODE: 97,       // ASCII code for 'a'
    LOWERCASE_Z_CODE: 122       // ASCII code for 'z'
};

/**
 * Applies the Atbash cipher transformation to the given text
 * 
 * The Atbash cipher is a monoalphabetic substitution cipher that substitutes
 * each letter with its mirror letter in the alphabet:
 * Standard Alphabet: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
 * Atbash Alphabet:   Z Y X W V U T S R Q P O N M L K J I H G F E D C B A
 * 
 * Mathematical formula:
 * - For uppercase: encrypted_char = 90 - (char_code - 65) = 155 - char_code
 * - For lowercase: encrypted_char = 122 - (char_code - 97) = 219 - char_code
 * 
 * Algorithm explanation:
 * - For each alphabetic character, find its position from the start of the alphabet
 * - Replace it with the character at the same position from the end of the alphabet
 * - Preserve case (uppercase/lowercase) and non-alphabetic characters
 * 
 * @param {string} text - The text to transform
 * @returns {string} - The transformed text
 * @throws {TypeError} - If input is not a string
 */
function applyAtbashCipher(text) {
    if (typeof text !== 'string') {
        throw new TypeError('Input must be a string');
    }
    
    return text.split('').map(char => {
        // Check if the character is a letter using regex
        if (char.match(/[a-z]/i)) {
            const charCode = char.charCodeAt(0);
            
            if (char >= 'A' && char <= 'Z') {
                // Uppercase letter transformation
                // A (65) becomes Z (90), B (66) becomes Y (89), etc.
                // Formula: 90 - (charCode - 65) = 155 - charCode
                return String.fromCharCode(
                    CIPHER_CONSTANTS.UPPERCASE_Z_CODE - (charCode - CIPHER_CONSTANTS.UPPERCASE_A_CODE)
                );
            } else if (char >= 'a' && char <= 'z') {
                // Lowercase letter transformation
                // a (97) becomes z (122), b (98) becomes y (121), etc.
                // Formula: 122 - (charCode - 97) = 219 - charCode
                return String.fromCharCode(
                    CIPHER_CONSTANTS.LOWERCASE_Z_CODE - (charCode - CIPHER_CONSTANTS.LOWERCASE_A_CODE)
                );
            }
        }
        
        // Preserve non-alphabetic characters (spaces, punctuation, numbers, etc.)
        return char;
    }).join('');
}

/**
 * Validates if input is suitable for Atbash cipher transformation
 * @param {string} text - Text to validate
 * @returns {boolean} - True if text is valid for Atbash transformation
 */
function isValidAtbashInput(text) {
    return typeof text === 'string' && text.length > 0;
}

// Export for both Node.js and browser environments
if (typeof module !== 'undefined' && module.exports) {
    // Node.js environment
    module.exports = {
        applyAtbashCipher,
        isValidAtbashInput
    };
} else {
    // Browser environment - attach to window
    window.AtbashCipher = {
        applyAtbashCipher,
        isValidAtbashInput
    };
}