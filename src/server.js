const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors');

//When we have our database we need to uncomment below and use mongo/mongoose
mongoose.connect('mongodb://localhost/ledproducts', { useNewUrlParser: true })

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
    console.log('Node.js listening on port ' + 8000)
})




