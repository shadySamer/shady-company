const express = require('express')
const hbs = require('hbs')
const fs = require('fs')
const port = process.env.PORT || 3000;

let app = express();
hbs.registerPartials(__dirname + '/view/part')
hbs.registerHelper('currentYear', ()=>{
    return new Date().getFullYear()
})
app.set('view engine', 'hbs')
app.set('views' , 'view')
app.use((req,res ,next)=>{
    let now = new Date().toString();
    let v = `time is ${now} + and the req is ${req.method} + url is ${req.url} `
    fs.appendFileSync('server.log', v)
    next();

})
app.get('/tom' ,(req , res)=>{
    res.render('manges.hbs',{
        tom:"tom is gere"
    })
})
 app.get('/', (req , res , next)=>{
 //  res.sendFile('help.html')
 res.render('about.hbs',{
     pageTitle : 'about page' , 
 })
}) 
app.use(express.static(__dirname + '/view'))
app.use('/hhh',(req, res )=>{
res.render('hhh.hbs')
})
app.get('/bad',(req , res )=>{
    res.send({
        ahmed:"hahah"
    })
})
app.listen(port,()=>{
    console.log('it\'s  '+ port )
})