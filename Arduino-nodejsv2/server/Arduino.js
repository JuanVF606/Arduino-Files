const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");
port = new SerialPort({ path: "COM4", baudRate: 9600 });

const parser = port.pipe(new ReadlineParser({ delimiter: "\r\n" }));

try {
  parser.on("data", console.log);
} catch (error) {
  console.log("error");
}
