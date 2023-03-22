const express = require('express');

// npm install easyqrcodejs-nodejs
const QRCode = require('easyqrcodejs-nodejs');

var app = express();

// Convertendo o corpo de requisições em json
app.use(express.json());


app.get('/', function(req, res) {
    res.send("Welcome to the QR Code Generator API!");
});


app.post('/qrcode', function(req, res) {
    var options = req.body;
    
    // New instance with options
    var qrcode = new QRCode(options);
    
    (async() => {
        await qrcode.saveImage({path: "QR.png"})
        res.sendFile(__dirname + "/QR.png")
    })()
});


app.listen(3000, function() {
    console.log("Server listening on PORT 3000.");
});
