const mqtt = require("mqtt");



const pub = mqtt.connect("mqtt://localhost:9000");

pub.on("connect", () => {
  parser.data("data", (data) => {
    pub.publish("topic test", data);
  });
});
