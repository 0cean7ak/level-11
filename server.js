const express = require('express')
const boardRouter = require('./router.js')

const app=express()

app.use('/board',boardRouter)


app.listen(3000,() => {
    console.log('sever onload');
})