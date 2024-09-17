const express = require('express')
const app = express()
const PORT = 4000
const db = require('./server/config/db')


app.use(express.urlencoded({extended:true}))
app.use(express.json())



app.get('/', (req, res)=>{
    res.send('welcome to server.')
})


const projectRoutes =require("./server/routes/projectRoutes")
app.use("/admin", projectRoutes)


app.listen(PORT, (err)=>{
    if(err){
        console.log('error occured in server', err ); 
    }
    else{
        console.log('server is running');
    }
})