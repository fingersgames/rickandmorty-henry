const {User}=require("../DB_connection")

const login= async (req,res)=>{

try {
    const {email,password}=req.query
    if(!email || !password) return res.status(400).send('Faltan datos')

    const u = await User.findOne({where:{email}})
    
    if (!u) return res.status(401).send('Usuario no encontrado')
    
    if(u.password!==password) return res.status(403).send('Password incorrecto')
     
    return res.json({access:true})
}
catch(error){
    return res.status(500).json(error.message)
}

}
module.exports=login

