const net = new (require("brain.js")).NeuralNetwork({
  hiddenLayers: [3] // You can adjust the number of hidden layers and neurons
})

let trainingData = [];  // Define trainingData in a higher scope
const vocabulary = []

// VECTORIZE TEXT : STRING TO 0 || 1
function vectorizeText(text) {
  const words = text.split(' ')
  return vocabulary.map(word => words.includes(word) ? 1 : 0)
}

function convertTextToNumericalData(documents) {
  // CREATE VOCABULARY
  documents.forEach(doc => {
    const words = doc.text.split(' ')
    words.forEach(word => {
      if (!vocabulary.includes(word)) {
        vocabulary.push(word)
      }
    })
  })

  // PREPARE TRAINING DATA TO BRAIN.JS FORMAT
  trainingData = documents.map(doc => ({
    input: vectorizeText(doc.text),
    output: doc.tags.reduce((output, tag) => {
      output[tag] = 1
      return output
    }, {})
  }))

  console.log(trainingData)
}

function trainModel() {
  net.train(trainingData, {
    iterations: 1000000,
    errorThresh: 0.005,
    log: true,
    logPeriod: 100,
    learningRate: 0.3
  })
}

function predict(documentText) {
  const newDocumentVector = vectorizeText(documentText)
  const output = net.run(newDocumentVector)

  console.log(output) // Output will show the predicted tags with confidence scores

  return output
}

module.exports = {
  convertTextToNumericalData,
  trainModel,
  predict
}