
const express = require('express')     //express creaza ruta cu api
const bodyParser = require('body-parser') //body-parser se ocupa cu datele json
const nodemailer = require('nodemailer')  //nodemailer este un api care faciliteaza api pentru mailuri
const app = express()
const cors=require('cors')

app.use(bodyParser.json())    //comunicarea cu serverul in json
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false}))   //trimite date in json
 
app.post('/api/form', (req, res) => {            //aici se cer datele pentru a fi trimise in mail
   nodemailer.createTestAccount((err, account) => {
       const htmlEmail = `
       <h3>Contact Details</h3>
       <ul>
       <li>Hotel: ${req.body.hotel}</li></li>
       <li>Name: ${req.body.name}</li>
       <li>CheckIn: ${req.body.date}</li>
       <li>Nights: ${req.body.nights}</li>
       <li>Price: ${req.body.nights* 75}</li>
       </ul>
       <h3>Message</h3>
       <p>${req.body.message}</p>
       `

       let transporter = nodemailer.createTransport({   //aici se specifica severul unde este trimis mailul si spre ce user
           host: 'smtp.ethereal.email',
           port: 587,
           auth: {
               user: 'eileen.volkman35@ethereal.email',
               pass: '33TGvfqhPJkCs8NsxH'
           }
       })
       let mailOptions = {     //optiuni pentru mail
           from: req.body.email ,
           to: 'eileen.volkman35@ethereal.email',
           subject: 'New Message',
           text: req.body.message,
           html: htmlEmail
       }

       transporter.sendMail(mailOptions, (err, info) => { // se trimite mailul
           if (err) {
               return console.log(err)
           }
       })
   })
})

const PORT =process.env.PORT || 3001  //portul unde ruleaza serverul

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})