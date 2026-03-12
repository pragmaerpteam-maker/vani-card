// This tells the QR code to use the EXACT address in the browser bar
const CARD_URL = window.location.href;

document.addEventListener("DOMContentLoaded", () => {
    const qrcodeContainer = document.getElementById("qrcode");
    
    // Clear any existing content to prevent double QR codes
    qrcodeContainer.innerHTML = "";

    new QRCode(qrcodeContainer, {
        text: CARD_URL,
        width: 160,          // Slightly larger for better scanning
        height: 160,
        colorDark: "#4A5568", // Mineral Blue/Grey (matches your theme)
        colorLight: "#F9F8F6", // Pearl White (matches your theme)
        correctLevel: QRCode.CorrectLevel.H // High error correction for reliability
    });
});
