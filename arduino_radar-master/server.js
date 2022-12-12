const port1 = 800;
const express = require("express")
const app = express()
var io = require('socket.io')(8050);

const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline');
const { application } = require("express");
const port = new SerialPort({ path: 'COM4', baudRate: 115200 })

const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))
parser.on('data', console.log)
io.on('connection', function (socket) {
  serialPort.on('data', function(data) {
    var angle = parseInt(data.toString().split("|")[0], 10);
    var distance = parseInt(data.toString().split("|")[1], 10);
    console.log([angle, distance]);
    socket.emit('data', [angle, distance]);
  });
});

app.use(express.static(__dirname+'/public'))
app.listen(port1);

