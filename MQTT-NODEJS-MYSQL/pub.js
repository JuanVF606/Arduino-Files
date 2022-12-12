const mqtt = require = ("mqtt")

const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");
port = new SerialPort({ path: "COM4", baudRate: 9600 });

const parser = port.pipe(new ReadlineParser({ delimiter: "\r\n" }));


const pub = mqtt.connect("mqtt://localhost:9000")

pub.on ("connect", () =>{
    parser.data("data", (data) => {
        pub.publish("topic test", data)    
})


    })
    