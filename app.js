const express    = require('express')
const app        = express()
const db         = require('./db/connection')
const bodyParser = require('body-parser')

const PORT = 3000;

app.listen(PORT, function(){
    console.log(`O express está rodando na porta ${PORT}`)
})
//body parser
app.use(bodyParser.urlencoded({extended: false}))

//db connection
db
.authenticate()
.then(() => {
    console.log("conectou ao banco com sucesso")

})
.catch(err => {
    console.log("Ocorreu um erro ao conectar")
})

//routes
app.get('/', (req, res) => {
    res.send("Está funcionando")
})

//jobs routes

app.use('/jobs', require('./routes/jobs'))