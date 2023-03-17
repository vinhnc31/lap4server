const path = require('path')
const express = require('express')
const exphbs  = require('express-handlebars');
const app = express()

app.engine('.hbs' , exphbs.engine({extname:".hbs"}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'));

console.log(path.join(__dirname, 'views'))

app.get('/', function (req, res) {
  res.render('home')
})

app.get('/tho', function (req, res) {
  res.render('tho')
})
app.listen(8000)