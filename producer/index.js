
console.log("producer")
import kafka  from "node-rdkafka"
import eventType  from '../eventType.js'

const stream = kafka.Producer.createWriteStream({
    'metadata.broker.list': 'localhost:9092'
}, {} , {topic: 'test'})

function queueMEssages() {
    const category = getRandomAnimal()
    const noise = getRandomNoise(category)
    const event = { category, noise}
    const result = stream.write(eventType.toBuffer(event))
    console.log(result)
}
function getRandomAnimal() {
    const categories = ['CAT', 'DOG'];
    return categories[Math.floor(Math.random() * categories.length)];
  }

  function getRandomNoise(animal) {
    if (animal === 'CAT') {
      const noises = ['meow', 'purr'];
      return noises[Math.floor(Math.random() * noises.length)];
    } else if (animal === 'DOG') {
      const noises = ['bark', 'woof'];
      return noises[Math.floor(Math.random() * noises.length)];
    } else {
      return 'silence..';
    }
  }

setInterval(() => {
    queueMEssages();
}, 3000)

//"type": "module"