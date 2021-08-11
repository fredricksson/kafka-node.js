console.log("consumer....")
import kafka  from "node-rdkafka"

const stream = kafka.KafkaConsumer({
    'group.id' : 'kafka',
    'metadata.broker.list': 'localhost:9092'
}, {} )