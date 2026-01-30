# 🛠️ SixFourMix
**SixFourMix** is a sleek, developer-focused web utility for converting and obfuscating data. It supports various **Encodings**, **Ciphers**, and **Binary** formats, making it a handy tool for CTFs and quick data manipulation.

### 🚀 [Live](https://mansis30.github.io/SixFourMix/)

---



## 🛠️ Tech Stack
* **HTML5:** Semantic structure for the interface.
* **CSS3:** Custom styling with a focus on dark-theme UI/UX.
* **JavaScript (ES6):** Core logic using a modular `switch` architecture for easy expansion.

## 📖 Technical Implementation


* **ROT13:** Implemented as a symmetric cipher where each letter is rotated by 13 places in the alphabet.
* **Binary:** Text is mapped to its ASCII decimal value and then converted to an 8-bit binary string.
* **Base64:** Utilizes `btoa()` and `atob()` with URI encoding to ensure support for special characters.

