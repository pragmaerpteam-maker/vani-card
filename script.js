// This tells the QR code to use the EXACT address in the browser bar
const CARD_URL = window.location.href;

document.addEventListener("DOMContentLoaded", () => {
    const qrcodeContainer = document.getElementById("qrcode");
    
    // Clear any existing QR code before generating
    qrcodeContainer.innerHTML = "";

    new QRCode(qrcodeContainer, {
        text: CARD_URL,
        width: 140,
        height: 140,
        colorDark: "#2D3436", // Elegant Mineral Grey
        colorLight: "#F9F8F6", // Pearl White background
        correctLevel: QRCode.CorrectLevel.H
    });
});
