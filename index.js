require('dotenv').config()

const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {

    res.send('Hello World!')

})


app.get('/twitter', (req, res) => {

    res.send('adiThorat')
})

app.get('/youtube' ,(req, res) => {
    res.send('<h3>beer and Adi </h3>')
})

app.get( '/insta',(req,res) => {
    res.send('<h1>Welcome to Instagram</h1>')
})


app.listen(process.env.PORT, () => {

    console.log(`Example app listening on port ${port}`)

})