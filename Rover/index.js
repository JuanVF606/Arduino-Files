const express = require('express')
const app = express();
const fs = require('fs')
const port1 = 3000;

// startcapture
const videoStream = require('./videoStream');
videoStream.acceptConnections(app, {
        width: 1280,
        height: 720,
        fps: 16,
        encoding: 'JPEG',
        quality: 7 // lower is faster, less quality
    }, 
    '/stream.mjpg', true);

app.use(express.static(__dirname+'/public/'));
app.listen(port1,() => console.log(`app listening on port ${port1}! In your web browser, navigate to http://192.168.0.14`));