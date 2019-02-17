const express = require('express')
const app = express()
const config = require('./config.json')
const bodyParser = require('body-parser')
const shell = require('shelljs')
const helmet = require('helmet')


app.use(helmet())
app.use(bodyParser.json())

app.post('/runscript', (req, res) => {
    if (req.body.token === config.token){
        shell.ls('scripts/*.sh').forEach(file => {
            shell.exec(file)
        })
        res.send('OK')
    }
});

app.listen(config.port, () => console.log(`Listening on port ${config.port}!`))