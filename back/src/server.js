const express=require("express")
const server=express()
const router=require('./routes/index')
const PORT=3001

server.use(express.json())
server.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Credentials','true')
    res.header('Access-Control-Allow-Headers','Origin, X-Request-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE')
    next()
})
server.use('/rickandmorty', router)
server.listen(PORT,()=>{
    console.log('Servidor en el puerto 3001 ', PORT)
})
