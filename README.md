# 🔐 Subcoder Cipher Matrix

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/yourusername/subcoder-cipher-matrix)
[![Status](https://img.shields.io/badge/status-active%20development-green.svg)](https://github.com/yourusername/subcoder-cipher-matrix)

> **The ultimate all-in-one encryption, decryption, and steganography toolkit with cyberpunk aesthetics**

A comprehensive web-based cryptography application designed for cybersecurity students, developers, and encryption enthusiasts. Features 50+ cipher methods, modern encryption algorithms, and educational tools in a sleek cyberpunk interface.

![Subcoder Cipher Matrix Screenshot](assets/images/app-screenshot.png)

## 🌟 Features

### ✅ Currently Implemented
- **🔐 Classical Ciphers**: Caesar, Vigenère
- **⚡ Encoding Methods**: Binary, Hexadecimal conversion
- **🖼️ Steganography**: Image steganography with password protection
- **🔒 Modern Crypto**: Basic PGP messaging system
- **🎨 Cyberpunk UI**: Futuristic interface with neon aesthetics
- **💾 Offline Operation**: Complete client-side processing

### 🚀 Coming Soon (50+ Methods)
- **Classical Ciphers**: Atbash, Polybius Square, Rail Fence, Playfair, Four Square
- **Modern Encryption**: AES (128/192/256), ChaCha20, Salsa20, Blowfish
- **Hash Functions**: SHA-256/512, MD5, HMAC, PBKDF2, bcrypt
- **Advanced Steganography**: Audio, text, file header hiding
- **Key Exchange**: Diffie-Hellman, ECDSA, RSA signatures
- **Fun Ciphers**: Morse Code, NATO Phonetic, Enigma Simulator
- **Utility Tools**: Password generator, entropy calculator, brute force tools

## 🎯 Target Audience

- **🎓 Cybersecurity Students**: Learn encryption fundamentals interactively
- **👨‍💻 Developers**: Quick access to encoding/decoding tools
- **🔍 Security Professionals**: Test and analyze encrypted data
- **🔬 Crypto Enthusiasts**: Explore historical and modern ciphers

## 🚀 Quick Start

### Option 1: Single File Deployment
1. Download `subcoder-cipher-matrix.html`
2. Open in any modern browser
3. Start encrypting! 🎉

### Option 2: Full Development Setup
```bash
# Clone the repository
git clone https://github.com/yourusername/subcoder-cipher-matrix.git
cd subcoder-cipher-matrix

# Open in browser
open src/index.html
# Or use a local server
npx live-server src/ --port=5500
```

## 📁 Project Structure

```
subcoder-cipher-matrix/
├── src/
│   ├── index.html              # Main application
│   ├── css/                    # Styling
│   │   ├── main.css           # Core cyberpunk styles
│   │   ├── components.css     # UI components
│   │   └── responsive.css     # Mobile optimization
│   ├── js/
│   │   ├── core/              # Core application logic
│   │   ├── engines/           # Cipher implementations
│   │   ├── ui/                # User interface management
│   │   └── tests/             # Testing framework
│   └── assets/                # Images, fonts, icons
├── docs/                      # Documentation
├── examples/                  # Sample files and tutorials
└── tools/                     # Utility scripts
```

## 🔧 System Requirements

- **Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Platform**: Windows 10/11, macOS, Linux
- **Memory**: 100MB RAM recommended
- **Storage**: 50MB for full installation
- **Network**: Offline capable (no internet required)

## 🎮 Usage Examples

### Basic Encryption
```javascript
// Caesar Cipher
const encrypted = caesarEncrypt("HELLO WORLD", 3);
console.log(encrypted); // "KHOOR ZRUOG"

// Vigenère Cipher
const encrypted = vigenereEncrypt("SECRET MESSAGE", "KEY");
console.log(encrypted); // "CIAPIX WICCEOI"
```

### Image Steganography
1. Select an image (PNG/JPG)
2. Enter secret text
3. Optional: Add password protection
4. Download modified image
5. Share securely! 🕵️‍♂️

### PGP Messaging
1. Generate key pair
2. Share public key with recipient
3. Encrypt messages with their public key
4. They decrypt with their private key

## 🛡️ Security Features

- **🔒 Client-Side Only**: No data leaves your browser
- **🎲 Secure Randomness**: Uses Web Crypto API
- **🧹 Memory Management**: Clears sensitive data after use
- **🔐 Modern Algorithms**: Industry-standard encryption
- **🚫 No Telemetry**: Complete privacy protection

## 🎨 Customization

### Themes
- **Cyberpunk Blue** (default)
- **Matrix Green**
- **Neon Purple**
- **Dark Mode**

### Configuration
```javascript
// Customize settings
SubcoderCipherMatrix.setConfig({
    theme: 'cyberpunk-blue',
    animations: true,
    autoSave: false,
    chunkSize: 1024 * 1024 // 1MB
});
```

## 🧪 Testing

Run the test suite to verify all ciphers work correctly:

```bash
# Open test runner
open test/test-runner.html

# Or run specific tests
npx live-server test/ --port=5501
```

## 📚 Educational Resources

- **📖 [Cipher Reference Guide](docs/ciphers/)**: Learn how each cipher works
- **🎓 [Cryptography Tutorials](docs/tutorials/)**: Step-by-step learning
- **⚡ [API Documentation](docs/api/)**: Developer reference
- **🔍 [Security Best Practices](docs/security/)**: Stay safe online

## 🤝 Contributing

We welcome contributions! Whether you're fixing bugs, adding new ciphers, or improving documentation:

1. **🍴 Fork** the repository
2. **🌿 Create** your feature branch (`git checkout -b feature/amazing-cipher`)
3. **✅ Test** your changes thoroughly
4. **💬 Commit** your changes (`git commit -m 'Add amazing cipher'`)
5. **🚀 Push** to the branch (`git push origin feature/amazing-cipher`)
6. **📝 Open** a Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## 🗺️ Roadmap

### Phase 1: Foundation (Current)
- ✅ Classical ciphers
- ✅ Basic steganography
- ✅ Core UI framework

### Phase 2: Expansion (Next 4 weeks)
- 🚧 Modern encryption (AES, ChaCha20)
- 🚧 Hash functions (SHA-256, HMAC)
- 🚧 Audio steganography

### Phase 3: Professional Tools (8-12 weeks)
- 🔮 JWT token tools
- 🔮 Certificate analysis
- 🔮 Advanced key management
- 🔮 Brute force tools

See [PROJECT_ROADMAP.md](PROJECT_ROADMAP.md) for detailed timeline.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Anthropic Claude**: AI-assisted development
- **Web Crypto API**: Modern cryptography support
- **Cyberpunk Community**: Design inspiration
- **Open Source Contributors**: Making crypto accessible

## 📞 Support

- **🐛 Bug Reports**: [Create an issue](https://github.com/yourusername/subcoder-cipher-matrix/issues/new?template=bug_report.md)
- **💡 Feature Requests**: [Request a feature](https://github.com/yourusername/subcoder-cipher-matrix/issues/new?template=feature_request.md)
- **📚 Documentation**: [Read the docs](docs/)
- **💬 Discussions**: [GitHub Discussions](https://github.com/yourusername/subcoder-cipher-matrix/discussions)

---

<div align="center">

[🌟 Star this repo](https://github.com/yourusername/subcoder-cipher-matrix) | [🔗 Share with friends](https://twitter.com/intent/tweet?text=Check%20out%20this%20amazing%20cipher%20tool!&url=https://github.com/yourusername/subcoder-cipher-matrix) | [☕ Buy me a coffee](https://buymeacoffee.com/yourusername)

</div>
