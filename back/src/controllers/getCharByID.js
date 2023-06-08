const URL="https://rickandmortyapi.com/api/character"
const axios=require("axios")
const getCharByID=(req,res)=>{
    const id=req.params.id
    URLID=URL+'/'+id
    axios(URLID)
    .then(response=>response.data)
    .then(({status,name,species,image,gender})=>{
        if(name){
            const character={
                id,
                status,
                name,
                species,
                image,
                gender
            }
            return res.json(character)//devueleve el 200 por defecto:status(200)
        }
        return res.status(404).send('Not found')
    })
    .catch(error=> res.status(500).send(error.message))
}

module.exports=getCharByID