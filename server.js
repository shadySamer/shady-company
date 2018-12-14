const express = require('express')
const hbs = require('hbs')
const fs = require('fs')

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

app.get('/bad',(req , res )=>{
    res.send({
        ahmed:"hahah"
    })
})
app.listen(3000,()=>{
    console.log('it\'s work ' )
})