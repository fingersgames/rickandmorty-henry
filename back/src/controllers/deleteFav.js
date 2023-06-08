const {Favorite} =require('../DB_connection')
const postUser = async (req,res)=>{
    const {id}=req.params
    try {
        if (id) {
            await Favorite.detroy({ where: { id } });
            const f= await Favorite.findAll()
            return res.json(f);
        }
        return res.status(400).send("Falta id")

    } catch (error) {
        return res.status(500).json(error.message)
    }
   
}
module.exports=postUser

