# 🛠️ SixFourMix
**SixFourMix** is a sleek, developer-focused web utility for converting data between **Plain Text**, **Base64**, and **Hexadecimal** formats.

### 🚀 [Live Demo](https://mansis30.github.io/SixFourMix/)

---



## 🛠️ Tech Stack
* **HTML5:** Semantic structure for the interface.
* **CSS3:** Custom styling with a focus on dark-theme UI/UX.
* **JavaScript (ES6):** Core logic using `btoa()`/`atob()` for Base64 and custom bit-manipulation for Hex conversion.

## 📖 How it Works


### Base64 Logic
The app uses the browser's native `btoa` (Binary to ASCII) and `atob` (ASCII to Binary) methods, wrapped in URI encoding to support special characters and emojis.

### Hexadecimal Logic
Data is converted by taking the Unicode value of each character, converting it to a **base-16** string, and padding it to ensure a consistent 2-digit format.

