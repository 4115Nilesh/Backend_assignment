const express = require('express')

const app = express()

    const HOSTNAME = 'localHost'
    const PORT = 3002;



 app.get('/', (req,res)=>{
    res.send('I am homepage')
 })

 
 app.get('/about', (req,res)=>{
    res.send(' I am About Page!!!')
 })

 
 app.get('/contact', (req,res)=>{
    res.send("email : support@pwskills.com")
 })



app.listen(PORT,()=>{
    console.log(`Server running at ${HOSTNAME} ${PORT}`);
    
})