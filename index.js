require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('hello world!')
})

app.get('/x', (req, res) => {
    res.send('applecom')
})
app.get('/login', (req,res) =>{
    res.send('<h1> please join </h1>')
})
app.get('/youtube', (req,res) => {
    res.send('<h2>think on you </h2>')
})
app.listen(process.env.PORT, () =>{
    console.log(`Example app listening on port ${port}`)
})