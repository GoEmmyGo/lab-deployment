const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

const port = process.env.PORT || 4040

app.listen(port, () => {
    console.log(`Listening to you on port ${port}`)
})