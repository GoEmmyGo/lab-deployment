const express = require('express')
const path = require('path')

const app = express()

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')

var rollbar = new Rollbar({
  accessToken: '7e1ae3e377254c968d84d5cff496ad3c',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

try {
    nonExistentFunction();
  } catch (error) {
    rollbar.log(error)
    
    // expected output: ReferenceError: nonExistentFunction is not defined
    // Note - error messages will vary depending on browser
  }

let criticalFunc = 0 
let warningFunc = 1

if(criticalFunc === 0) {rollbar.critical('THIS IS CRITICAL, HOW MANY TIMES DO I HAVE TO TELL YOU')}

if(warningFunc === 1) {rollbar.warning('THIS IS YOUR LAST WARNING')}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, './public/main.js'))
  })

const port = process.env.PORT || 4040

app.listen(port, () => {
    console.log(`Listening to you on port ${port}`)
})

