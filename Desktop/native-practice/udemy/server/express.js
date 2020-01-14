const express = require('express')
const app = express()
const port = 3009
const bodyParser = require('body-parser')
const router = require('./router.js')
const morgan = require('morgan')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(morgan('dev'));

app.use('/',router)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))