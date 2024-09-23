import CryptoJS from "crypto-js";

export function Encryption(obj) {
    const objectString = JSON.stringify(obj);
    // Encrypt the string using a secret key
    const secretKey = "fsdfgoiuewnskj812jndsf"; // Use a secure key
    const encrypted = CryptoJS.AES.encrypt(objectString, secretKey).toString();

    // Encode the encrypted string for use in a URL
    const encoded = encodeURIComponent(encrypted);
    return encoded;
}