const URL="https://rickandmortyapi.com/api/character/"
const axios=require("axios")
const getCharByID=(req,res)=>{
    const id=req.params.id
    axios(URL,'/',id)
    .then(response=>response.data)
    .then(({status,name,species,origin,image,gender,origin})=>{
        if(name){
            const character={
                id,
                status,
                name,
                species,
                origin,
                image,
                gender,
                origin
            }
            return res.json(character)//devueleve el 200 por defecto:status(200)
        }
        return res.status(404).send('Not found')
    })
    .catch(error=> res.status(500).send(error.message))
}
module.exports.getChatByID