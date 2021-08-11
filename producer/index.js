
console.log("producer")
import kafka  from "node-rdkafka"

const stream = kafka.Producer.createWriteStream({
    'metadata.broker.list': 'localhost:9092'
}, {} , {topic: 'test'})

function queueMEssages() {
    const result = stream.write(Buffer.from('hi'))
    console.log(result)
}

setInterval(() => {
    queueMEssages();
}, 3000)

//"type": "module"