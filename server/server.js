const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors');
const keys = require('./config/keys')

mongoose.connect(keys.MONGODB_URI, { useNewUrlParser: true })

const app = express()

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

const port = process.env.PORT || 8000
const mainRoutes = require('./routes/main')

app.use(mainRoutes)

app.listen(port, () => {
    console.log('Node.js listening on port ' + port)
})




