// Function to handle the button clicks
function process(action) {
    const input = document.getElementById('input').value;
    const format = document.getElementById('format').value;
    const outputField = document.getElementById('output');
    
    try {
        switch(format) {
            case 'base64':
                outputField.value = (action === 'encode') ? b64Encode(input) : b64Decode(input);
                break;
            case 'hex':
                outputField.value = (action === 'encode') ? hexEncode(input) : hexDecode(input);
                break;
            case 'rot13':
                // ROT13 doesn't need separate encode/decode buttons
                outputField.value = rot13(input);
                break;
            case 'binary':
                outputField.value = (action === 'encode') ? binaryEncode(input) : binaryDecode(input);
                break;
            default:
                outputField.value = "Format not supported.";
        }
    } catch (e) {
        outputField.value = "Error: Invalid input for this format.";
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

// --- ROT13 Logic ---
// ROT13 is its own inverse; applying it twice returns the original text
function rot13(str) {
    return str.replace(/[a-z]/gi, letter => 
        String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13 : -13))
    );
}

// --- Binary Logic ---
function binaryEncode(str) {
    return str.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
}

function binaryDecode(bin) {
    return bin.split(' ').map(b => String.fromCharCode(parseInt(b, 2))).join('');
}