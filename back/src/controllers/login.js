const users=require("../utils/users")
const login=(req,res)=>{
    const {email,password}=req.body
    const userFound=users.find(a=>a.email===email && a.pasword===password)
    userFound
    ? res.json({access:true})
    : res.status(404).json({access:false})
}
module.exports.login