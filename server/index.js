var path =require('path')
var express = require('express')
var app = express()

app.use('/build',express.static(path.join(__dirname,'../build')))

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.get('/',(req,res)=>{
    res.render('index')
})
app.listen(3000,(req,res)=>{
    console.log('started')
})