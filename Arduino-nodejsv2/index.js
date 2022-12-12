const express = require('express')
const app = express();
const fs = require('fs')
const Sport = 3000;
const mqtt = require("mqtt")
const mysql = require("mysql")

const { SerialPort } = require('serialport')
const { ReadlineParser } = require("@serialport/parser-readline");

let rpi = "/dev/ttyACM0"
let pc = "COM4";

const port = new SerialPort({ path: pc, baudRate: 9600 });

const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))


// DB
const db = mysql.createConnection({
  host: "192.1680.03",
  port: 3306,
  user: "root",
  password: "casa2256A",
  database: "mqttnode"
})

db.connect(() => {
  console.log("Database OK")
})

const sub = mqtt.connect("mqtt://localhost:9000")

sub.on("message", (topic, message) =>{
  message = message.toString()
  message = message.split("")
  message = parseInt(message[1])
  message = parseInt(message[4])
  message = parseInt(message[6])
  message = parseInt(message[6])

  db.query(
      "insert into arduino set ?",
      {data: message },
      (err, rows) => {
          if(!err) console.log("data saved!")
      }
  )
})

// mqtt connection and mysql
sub.on("connect", () => {
  sub.subscribe("topic test")
  parser.data("data", (data) => {
    sub.publish("topic test", data);
  });
});


try {
  parser.on("data",console.log)
} catch (error) {
    console.log("error");
}


// // start capture
// const videoStream = require('./videoStream');
// videoStream.acceptConnections(app, {
//         width: 1280,
//         height: 720,
//         fps: 16,
//         encoding: 'JPEG',
//         quality: 7 // lower is faster, less quality
//     }, 
//     '/stream.mjpg', true);

app.use(express.static(__dirname+'/public/'));
app.listen(Sport, port,() => console.log(`Example app listening on port ${Sport}! In your web browser, navigate to localhost:3000`));