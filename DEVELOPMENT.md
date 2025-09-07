# 🐙 GitHub Setup Guide for Subcoder Cipher Matrix

This guide will help you rename your existing `cipher-matrix` repository to `subcoder-cipher-matrix` and set up the professional project structure.

## 📋 Prerequisites

- Existing GitHub repository (`cipher-matrix`)
- Git installed on your local machine
- GitHub account with appropriate permissions

## 🔄 Step 1: Rename Your GitHub Repository

### Option A: Using GitHub Web Interface (Recommended)
1. **Navigate** to your repository: `https://github.com/yourusername/cipher-matrix`
2. **Click** the "Settings" tab
3. **Scroll down** to the "Repository name" section
4. **Change** `cipher-matrix` to `subcoder-cipher-matrix`
5. **Click** "Rename" button
6. **Confirm** the rename operation

### Option B: Using GitHub CLI (Alternative)
```bash
# If you have GitHub CLI installed
gh repo rename yourusername/cipher-matrix subcoder-cipher-matrix
```

## 📁 Step 2: Update Local Repository

### Update Remote URL
```bash
# Navigate to your local repository
cd path/to/your/cipher-matrix

# Update remote URL to new name
git remote set-url origin https://github.com/yourusername/subcoder-cipher-matrix.git

# Verify the change
git remote -v
```

### Rename Local Folder (Optional)
```bash
# Navigate to parent directory
cd ..

# Rename local folder to match
mv cipher-matrix subcoder-cipher-matrix
cd subcoder-cipher-matrix
```

## 🏗️ Step 3: Create Professional Project Structure

### Create Directory Structure
```bash
# Create main directories
mkdir -p src/{css,js/{core,engines,ui,tests},assets/{images,fonts,icons}}
mkdir -p docs/{api,ciphers,tutorials,security}
mkdir -p examples/{sample-texts,sample-images,sample-keys}
mkdir -p tools
mkdir -p .github/{workflows,ISSUE_TEMPLATE}

# Create essential files
touch .gitignore
touch LICENSE
touch CHANGELOG.md
touch PROJECT_ROADMAP.md
```

### Create .gitignore File
```bash
cat > .gitignore << 'EOF'
# Development files
*.log
*.tmp
.DS_Store
Thumbs.db

# IDE files
.vscode/settings.json
.vscode/launch.json
*.swp
*.swo

# Node modules (if using build tools)
node_modules/
npm-debug.log*

# Build outputs
dist/
build/

# Environment files
.env
.env.local

# Testing outputs
coverage/
test-results/

# Package files
*.zip
*.tar.gz

# OS generated files
.DS_Store?
ehthumbs.db
Icon?
Thumbs.db

# Temporary files
*~
*.bak
*.swp
*.tmp
EOF
```

### Create VS Code Configuration
```bash
mkdir -p .vscode

cat > .vscode/settings.json << 'EOF'
{
    "editor.tabSize": 4,
    "editor.insertSpaces": true,
    "editor.detectIndentation": true,
    "editor.formatOnSave": true,
    "html.format.indentInnerHtml": true,
    "css.validate": true,
    "javascript.validate.enable": true,
    "emmet.includeLanguages": {
        "javascript": "javascriptreact"
    },
    "files.associations": {
        "*.html": "html"
    },
    "liveServer.settings.port": 5500,
    "liveServer.settings.CustomBrowser": "chrome",
    "files.exclude": {
        "**/.git": true,
        "**/.DS_Store": true,
        "**/node_modules": true
    }
}
EOF

cat > .vscode/extensions.json << 'EOF'
{
    "recommendations": [
        "ms-vscode.live-server",
        "esbenp.prettier-vscode",
        "ms-vscode.vscode-json",
        "streetsidesoftware.code-spell-checker",
        "ms-vscode.vscode-todo-highlight",
        "formulahendry.auto-rename-tag",
        "christian-kohler.path-intellisense"
    ]
}
EOF
```

## 📝 Step 4: Organize Existing Code

### Move Your Current HTML File
```bash
# Assuming your current file is in the root
mv Cyberpunk\ Cipher\ Application.html src/index.html

# Or if it has a different name
mv your-current-file.html src/index.html
```

### Extract CSS to Separate File
Create `src/css/main.css` and move the CSS from your HTML file:

```bash
cat > src/css/main.css << 'EOF'
/* Extract the CSS from your existing HTML file and put it here */
/* This will be done in the next step when we refactor the code */
EOF
```

### Extract JavaScript to Separate Files
Create the JavaScript structure:

```bash
# Core application files
touch src/js/core/app.js
touch src/js/core/config.js
touch src/js/core/validation.js
touch src/js/core/crypto-service.js
touch src/js/core/storage-service.js
touch src/js/core/utils.js

# Cipher engine files
touch src/js/engines/classical-ciphers.js
touch src/js/engines/modern-crypto.js
touch src/js/engines/encoding.js
touch src/js/engines/steganography.js
touch src/js/engines/hash-functions.js

# UI management files
touch src/js/ui/components.js
touch src/js/ui/events.js
touch src/js/ui/modal.js
touch src/js/ui/themes.js

# Test files
touch src/js/tests/test-framework.js
touch src/js/tests/cipher-tests.js
touch src/js/tests/validation-tests.js
```

## 🎫 Step 5: Create GitHub Issue Templates

### Bug Report Template
```bash
mkdir -p .github/ISSUE_TEMPLATE

cat > .github/ISSUE_TEMPLATE/bug_report.md << 'EOF'
---
name: Bug report
about: Create a report to help us improve
title: '[BUG] '
labels: 'bug'
assignees: ''
---

**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Enter text '....'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Browser Information:**
 - Browser: [e.g. Chrome, Firefox, Safari]
 - Version: [e.g. 22]
 - OS: [e.g. Windows 10, macOS, Linux]

**Cipher/Feature affected:**
- [ ] Caesar Cipher
- [ ] Vigenère Cipher
- [ ] Binary Converter
- [ ] Hexadecimal Converter
- [ ] Image Steganography
- [ ] PGP Messaging
- [ ] Other: ____________

**Additional context**
Add any other context about the problem here.
EOF
```

### Feature Request Template
```bash
cat > .github/ISSUE_TEMPLATE/feature_request.md << 'EOF'
---
name: Feature request
about: Suggest a cipher or feature for this project
title: '[FEATURE] '
labels: 'enhancement'
assignees: ''
---

**Feature Type**
- [ ] New cipher implementation
- [ ] UI/UX improvement
- [ ] Performance enhancement
- [ ] Documentation
- [ ] Testing
- [ ] Other

**Cipher/Feature Description**
A clear and concise description of what you want to be added.

**Category**
- [ ] Classical Cipher
- [ ] Modern Encryption
- [ ] Encoding Method
- [ ] Hash Function
- [ ] Steganography
- [ ] Utility Tool
- [ ] Educational Feature

**Educational Value**
Explain why this would be valuable for learning cryptography.

**Implementation Complexity**
- [ ] Simple (1-2 hours)
- [ ] Medium (1-2 days)
- [ ] Complex (1+ weeks)

**Is this feature related to a problem?**
A clear description of what the problem is. Ex. I'm always frustrated when [...]

**Describe the solution you'd like**
A clear description of what you want to happen.

**Additional context**
Add any other context, screenshots, or examples about the feature request here.
EOF
```

### Pull Request Template
```bash
cat > .github/PULL_REQUEST_TEMPLATE.md << 'EOF'
## 🎯 Description
Brief description of the changes made.

## 🔧 Type of Change
- [ ] 🐛 Bug fix (non-breaking change which fixes an issue)
- [ ] ✨ New feature (non-breaking change which adds functionality)
- [ ] 💥 Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] 📚 Documentation update
- [ ] 🎨 Style/UI improvement
- [ ] ♻️ Code refactoring
- [ ] ⚡ Performance improvement

## 🧪 Testing
- [ ] Tested in Chrome
- [ ] Tested in Firefox
- [ ] Tested in Safari/Edge
- [ ] Added unit tests
- [ ] Manual testing completed
- [ ] No console errors

**Test Results:**
- Encryption works: ✅/❌
- Decryption works: ✅/❌
- Error handling: ✅/❌
- Mobile responsive: ✅/❌

## 📱 Screenshots (if applicable)
<!-- Add screenshots of new features or UI changes -->

## 🔍 Checklist
- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes

## 📝 Additional Notes
<!-- Any additional information, context, or screenshots -->
EOF
```

## ⚙️ Step 6: Create GitHub Actions Workflow

```bash
mkdir -p .github/workflows

cat > .github/workflows/test.yml << 'EOF'
name: Test Suite

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    strategy:
      matrix:
        browser: [chrome, firefox]
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: |
        npm install -g live-server
        npm install -g playwright
        npx playwright install
    
    - name: Start development server
      run: |
        live-server src/ --port=5500 --no-browser &
        sleep 5
    
    - name: Run tests
      run: |
        # Add your test commands here
        echo "Tests will be implemented in future versions"
    
    - name: Upload test results
      uses: actions/upload-artifact@v3
      if: failure()
      with:
        name: test-results-${{ matrix.browser }}
        path: test-results/
EOF
```

## 📄 Step 7: Create Additional Documentation Files

### License File
```bash
cat > LICENSE << 'EOF'
MIT License

Copyright (c) 2024 [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
EOF
```

### Changelog
```bash
cat > CHANGELOG.md << 'EOF'
# Changelog

All notable changes to the Subcoder Cipher Matrix project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Professional project structure
- Comprehensive documentation
- GitHub Actions CI/CD
- Issue and PR templates
- Development guidelines

### Changed
- Repository renamed from `cipher-matrix` to `subcoder-cipher-matrix`
- Reorganized code into modular structure

## [1.0.0] - 2024-XX-XX

### Added
- Caesar Cipher implementation
- Vigenère Cipher implementation
- Binary/Hexadecimal converters
- Image steganography with password protection
- Basic PGP messaging system
- Cyberpunk-themed user interface
- Offline functionality

### Security
- Client-side only processing
- Secure random number generation
- Memory cleanup after operations
EOF
```

### Project Roadmap
```bash
cat > PROJECT_ROADMAP.md << 'EOF'
# 🗺️ Project Roadmap - Subcoder Cipher Matrix

## 🎯 Vision
Create the most comprehensive, educational, and user-friendly cryptography toolkit available as a web application.

## 📊 Current Status (v1.0.0)
- ✅ Basic project structure
- ✅ 6 cipher methods implemented
- ✅ Cyberpunk UI foundation
- ✅ Offline functionality

## 🚀 Development Phases

### Phase 1: Foundation & Classical Ciphers (Weeks 1-4)
**Goal**: Establish solid foundation and expand classical cipher collection

#### Week 1-2: Project Setup ✅
- [x] Repository restructuring
- [x] Documentation framework
- [x] Development workflow
- [x] GitHub integration

#### Week 3-4: Classical Ciphers
- [ ] Atbash Cipher
- [ ] ROT13/ROT47
- [ ] Rail Fence Cipher
- [ ] Polybius Square
- [ ] Playfair Cipher
- [ ] Beaufort Cipher

**Deliverables**:
- 12+ classical ciphers total
- Comprehensive test suite
- Educational documentation
- Mobile optimization

### Phase 2: Modern Crypto & Encoding (Weeks 5-8)
**Goal**: Add modern encryption and expand encoding options

#### Modern Encryption
- [ ] AES (128/192/256-bit)
- [ ] ChaCha20
- [ ] Salsa20
- [ ] Blowfish

#### Encoding Methods
- [ ] Base32/Base58/Base85
- [ ] URL Encoding
- [ ] HTML Entity Encoding
- [ ] QR Code Generator

#### Hash Functions
- [ ] SHA-256/SHA-512
- [ ] MD5 (educational)
- [ ] HMAC
- [ ] PBKDF2

**Deliverables**:
- 25+ total cipher methods
- Performance optimization
- Advanced error handling
- Security audit

### Phase 3: Advanced Features (Weeks 9-12)
**Goal**: Professional-grade tools and advanced functionality

#### Advanced Steganography
- [ ] Audio steganography
- [ ] Text steganography
- [ ] File header hiding
- [ ] Whitespace steganography

#### Key Exchange & Signatures
- [ ] Diffie-Hellman Key Exchange
- [ ] ECDSA Digital Signatures
- [ ] RSA Digital Signatures
- [ ] Ed25519

#### Professional Tools
- [ ] JWT Token Generator/Parser
- [ ] OAuth Token Handler
- [ ] SSL/TLS Certificate Analysis
- [ ] Password Strength Meter

**Deliverables**:
- 40+ total methods
- Professional tool suite
- Advanced documentation
- Performance benchmarks

### Phase 4: Polish & Deployment (Weeks 13-16)
**Goal**: Production-ready release with full feature set

#### Educational Features
- [ ] Interactive tutorials
- [ ] Cipher explanations
- [ ] Step-by-step walkthroughs
- [ ] Historical context

#### Advanced UI/UX
- [ ] Theme customization
- [ ] Accessibility improvements
- [ ] Keyboard shortcuts
- [ ] Export/import functionality

#### Deployment Options
- [ ] Single-file distribution
- [ ] Browser extension
- [ ] Desktop app wrapper
- [ ] Progressive Web App

**Deliverables**:
- 50+ cipher methods
- Complete documentation
- Multiple deployment options
- Full test coverage

## 📈 Feature Priority Matrix

### 🔥 High Priority (Immediate)
1. **Atbash Cipher** - Simple, educational value
2. **ROT13** - Popular, easy implementation
3. **Base64 variants** - Common encoding needs
4. **Mobile optimization** - User experience
5. **Test framework** - Quality assurance

### 🔨 Medium Priority (Next 4 weeks)
1. **AES encryption** - Modern crypto standard
2. **SHA-256 hashing** - Security fundamentals
3. **Audio steganography** - Unique feature
4. **Performance optimization** - Scalability
5. **Advanced error handling** - Robustness

### 💡 Low Priority (Future releases)
1. **Enigma simulator** - Historical interest
2. **Brute force tools** - Educational analysis
3. **Network protocol analysis** - Advanced users
4. **Multi-language support** - Global reach
5. **Plugin architecture** - Extensibility

## 🎯 Success Metrics

### Technical Metrics
- **Performance**: <1 second for 10KB text encryption
- **Compatibility**: 95%+ browser support
- **Reliability**: <0.1% error rate
- **Security**: Zero client-side vulnerabilities

### User Metrics
- **Educational Value**: User feedback surveys
- **Adoption**: Download/usage statistics
- **Engagement**: Feature usage analytics
- **Satisfaction**: GitHub stars and feedback

### Community Metrics
- **Contributors**: 10+ active contributors
- **Issues**: <48 hour response time
- **Documentation**: 90%+ coverage
- **Testing**: 95%+ code coverage

## 🛣️ Future Considerations

### Version 2.0 Ideas
- **Machine Learning**: Cipher identification
- **Collaborative Features**: Multi-user encryption
- **API Integration**: External service connections
- **Advanced Analytics**: Cryptanalysis tools
- **Educational Platform**: Structured learning paths

### Technology Evolution
- **WebAssembly**: Performance-critical operations
- **Web Workers**: Background processing
- **IndexedDB**: Advanced local storage
- **WebRTC**: Secure communication
- **PWA Features**: Offline-first design

## 📞 Feedback & Contributions

We welcome feedback on this roadmap! Please:
- **Open issues** for feature suggestions
- **Join discussions** about priorities
- **Contribute code** for any phase
- **Provide feedback** on implementations

---

*Last updated: [Current Date]*  
*Next review: [Monthly]*
EOF
```

## 💾 Step 8: Copy Your Documentation Files

Now copy the documentation files from the artifacts above:

1. **README.md** - Main project documentation
2. **CONTRIBUTING.md** - Contribution guidelines
3. **PRD.md** - Product Requirements Document
4. **Technical-Design-Document.md** - Architecture documentation

## 🔄 Step 9: Commit and Push Changes

```bash
# Add all new files
git add .

# Create initial commit with new structure
git commit -m "feat: restructure project with professional setup

- Rename repository to subcoder-cipher-matrix
- Add comprehensive documentation
- Create modular file structure
- Add GitHub templates and workflows
- Implement development guidelines"

# Push to GitHub
git push origin main
```

## ✅ Step 10: Verify Setup

### Check Repository Structure
Your repository should now look like this:
```
subcoder-cipher-matrix/
├── .github/
│   ├── workflows/
│   ├── ISSUE_TEMPLATE/
│   └── PULL_REQUEST_TEMPLATE.md
├── .vscode/
├── src/
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── assets/
├── docs/
├── examples/
├── tools/
├── README.md
├── CONTRIBUTING.md
├── LICENSE
├── CHANGELOG.md
├── PROJECT_ROADMAP.md
└── .gitignore
```

### Test Local Development
```bash
# Install live-server if you haven't already
npm install -g live-server

# Start development server
live-server src/ --port=5500

# Open browser to http://localhost:5500
```

## 🎉 Next Steps

1. **Refactor existing code** into the new modular structure
2. **Set up Claude CLI** for AI-assisted development
3. **Begin implementing** additional ciphers
4. **Create your first issue** to track progress
5. **Invite collaborators** if desired

## 🆘 Troubleshooting

### Common Issues

#### "Repository not found" error
- Check that the repository was renamed correctly
- Verify the new URL: `https://github.com/yourusername/subcoder-cipher-matrix`

#### Permission denied
- Ensure you have write access to the repository
- Check your Git credentials: `git config --list`

#### Local folder conflicts
- Make sure you're in the correct directory
- Use `pwd` (Linux/Mac) or `cd` (Windows) to check location

### Need Help?
- **GitHub Docs**: [Renaming a Repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/renaming-a-repository)
- **Git Docs**: [Working with Remotes](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes)
- **Create an Issue**: Use the bug report template if something isn't working

---

🎉 **Congratulations!** Your repository is now professionally structured and ready for development. You can now proceed with setting up Claude CLI and beginning the implementation of additional cipher methods! 
