const express = require('express')
const app = express()
const config = require('./config.json')
const bodyParser = require('body-parser')


app.use(bodyParser.json())

app.post('/runscript', (req, res) => {
    if (req.body.token === config.token){
        res.send('OK')
    }
});

app.listen(config.port, () => console.log(`Listening on port ${config.port}!`))