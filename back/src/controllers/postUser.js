const {User} = require('../DB_connection')
const postUser = async (req,res)=>{
    const {email,password}=req.body
    try {
        if (email && password) {
            const user = await User.findOrCreate({ where: { email, password } });
            return res.json(user);
        }
        return res.status(400).send("Faltan datos")

    } catch (error) {
        return res.status(500).json(error.message)
    }
   
}
module.exports=postUser