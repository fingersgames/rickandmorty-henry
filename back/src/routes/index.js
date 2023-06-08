const login=require('../controllers/login')
const getCharByID=require('../controllers/getCharByID')
const getCharDetail=require('../controllers/getCharDetail')
const postFav = require('../controllers/postFav')
const deleteFav = require('../controllers/deleteFav')
const router = require('express').Router()
const postUser = require('../controllers/postUser')


router.get("/login",login)
router.post("/login",postUser)

router.get("/character/:id",(req,res)=>{
    getCharByID(req,res)
})

router.get("/character/:id/detail",(req,res)=>{
    getCharDetail(req,res)
})

router.post('/fav',postFav)

router.delete('/fav/:id',(req,res)=>{
    deleteFav(req,res)
})


module.exports=router