// Function to handle the button clicks
function process(action) {
    const input = document.getElementById('input').value;
    const format = document.getElementById('format').value;
    const outputField = document.getElementById('output');
    
    try {
        if (action === 'encode') {
            outputField.value = format === 'base64' ? b64Encode(input) : hexEncode(input);
        } else {
            outputField.value = format === 'base64' ? b64Decode(input) : hexDecode(input);
        }
    } catch (e) {
        outputField.value = "Error: Invalid input for decoding.";
    }
}

// --- Base64 Logic ---
function b64Encode(str) {
    return btoa(unescape(encodeURIComponent(str)));
}

function b64Decode(str) {
    return decodeURIComponent(escape(atob(str)));
}

// --- Hex Logic ---
function hexEncode(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += str.charCodeAt(i).toString(16).padStart(2, '0') + ' ';
    }
    return result.trim().toUpperCase();
}

function hexDecode(hex) {
    let str = '';
    // Remove spaces and 0x prefixes
    hex = hex.replace(/\s|0x/g, '');
    for (let i = 0; i < hex.length; i += 2) {
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return str;
}

// Utility: Copy to Clipboard
function copyToClipboard() {
    const output = document.getElementById('output');
    output.select();
    document.execCommand('copy');
    alert("Copied to clipboard!");
}