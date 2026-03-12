const CARD_URL = "https://scoriait.com/card/vani";

document.addEventListener("DOMContentLoaded", () => {
    // Dynamically generate QR Code
    const qrcodeContainer = document.getElementById("qrcode");
    
    new QRCode(qrcodeContainer, {
        text: CARD_URL,
        width: 128,
        height: 128,
        colorDark: "#2D3436",
        colorLight: "#F9F8F6",
        correctLevel: QRCode.CorrectLevel.H
    });
});