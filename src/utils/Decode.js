import CryptoJS from "crypto-js";

export const Decryption = (url) => {
    const secretKey = "fsdfgoiuewnskj812jndsf"; // Use a secure key
    // Decrypt the string
    const bytes = CryptoJS.AES.decrypt(decodeURIComponent(url), secretKey);
    const decryptedObject = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedObject;
}