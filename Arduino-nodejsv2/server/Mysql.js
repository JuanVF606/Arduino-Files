const mqtt = require("mqtt")
const mysql = require("mysql")

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

sub.on("connect", () => {
    sub.subscribe("topic test")
})

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