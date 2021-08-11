
console.log("producer")
import kafka  from "node-rdkafka"
import eventType  from '../eventType.js'

const stream = kafka.Producer.createWriteStream({
    'metadata.broker.list': 'localhost:9092'
}, {} , {topic: 'test'})

function queueMEssages() {
    const event = { category: 'DOG', noise: "bark"}
    const result = stream.write(eventType.toBuffer(event))
    console.log(result)
}

setInterval(() => {
    queueMEssages();
}, 3000)

//"type": "module"