
var http=require("http")
const data=require('./utils/data.js')
var fs=require("fs");

http
.createServer((req, res)=>{

    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url.includes("rickandmorty/character")){
        id=+req.url.split('/').at(-1)//el mas para pasar a numero, el at-1 para el ultimo elemento, el split para cortar

        const character=data.find((character)=>{
            return character.id===id
        })
        // if(character){
            return res
            .writeHead(200,{"Content-type":"application/json"})
            .end(JSON.stringify(character))
        // }

        // return res
        // .writeHead(404,{"Content-type":"text/plain"})
        // .end("Error, no existe ese numero")
        // console.log(id)
        // const error=[{error:'errror'}]
        // return res
        // .writeHead(404,{"Content-type":"application/json"})
        // .end(JSON.stringify(error))        
    
    }
    // let url=req.url.trim().split('/') 
  
    // if (url.length===4) {  
       
    //     id=url.pop(); 
        
    //     url=url.join('/')
        
    //     if(url==="/rickandmorty/character"){
    //         console.log(id)
    //         if (data.in)
            // fs.readFile("./utils/data.js",(err,data)=>{
            //     console.log(data)
            //     if (err) {
            //         res.writeHead(404,{"Content-type":"text/plain"})
            //         return res.end("Error, archivo no econtrado")
            //     }
            //     res.writeHead(200,{"Content-type":"text/plain"})
            //     return res.end("asdfsdf")
            // })
        // }
    // }
})
.listen(3001,'127.0.0.1')