const qrCode = new QRCodeStyling({
    width: 300,
    height: 300,
    dotsOptions: {
        color: "#000",
        type: "rounded"
    },
    backgroundOptions: {
        color: "#fff"
    }
});

function generateQRCode() {
    const textInput = document.getElementById("textInput").value;
    if (textInput) {
        qrCode.update({
            data: textInput
        });
        qrCode.append(document.getElementById("qrcode"));
        document.getElementById("downloadBtn").style.display = "block";
    } else {
        alert("Please enter a text or URL.");
    }
}

function downloadQRCode() {
    qrCode.download({
        name: "qrcode",
        extension: "png"
    });
}
