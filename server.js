const express = require('express')
const app = express()
const fetch = require('node-fetch')
require('dotenv').config()

app.use(express.static('public'))

//shows index.html
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

//finds specified date and sends obj
app.get('/pic/:date', (req,res) => {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.KEY}&date=${req.params.date}`
    fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        res.send({ mediatype: data.media_type, hdurl: data.hdurl, video: data.url, explain: data.explanation, title: data.title})
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
})

//finds random date and sends obj
app.get('/random', (req,res) => {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.KEY}&count=1`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.send({ mediatype: data[0].media_type, hdurl: data[0].hdurl, video: data[0].url, explain: data[0].explanation, title: data[0].title })
        })
        .catch(error => console.error(error))
})


app.listen(process.env.PORT || 8000, () => {
    console.log(`server is running`)
})