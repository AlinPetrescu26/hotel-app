// Componenta care se ocupa cu transmisiile de date intre baza de date, server si site
var express = require('express')   //express creaza ruta cu api 
var cors = require('cors')         //cors se ocupa cu schimbul de date intre site si api
var bodyParser = require('body-parser') //body-parser se ocupa cu datele json
var app = express()
var port = process.env.PORT || 5000  // portul care il ocupa serverul

app.use(bodyParser.json())  //comunicarea cu serverul in json
app.use(cors())
app.use(
  bodyParser.urlencoded({     //trimite date in json
    extended: false
  })
)

var Users = require('./routes/Users') //rutele in care comunica api

app.use('/users', Users)

app.listen(port, function() {     //asculta portul un care accesam api
  console.log('Server is running on port: ' + port)
})