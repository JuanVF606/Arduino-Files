const mosca = require("mosca")

const broker= new mosca.Server({
    port: 9000
})

broker.on("ready", () =>{
    console.log("mosca broker is ready")
})

broker.on("clientConnected", () =>{
    console.log("New Client "+ client.id)
})

//broker.on("published", (packet) => {
//    console.log(packet.payload.toString())
//})