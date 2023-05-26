const {login}=require('../controllers/login')
const {getCharByID}=require('../controllers/getCharByID')
const {getCharDetail}=require('../controllers/getCharDetail')
const {deleteFav, postFav} =require('../controllers/handleFavorites')
const router = require('express').Router()

router.get("/character/:id",(req,res)=>{
    getCharByID(req,res)
})

router.get("/character/:id/detail",(req,res)=>{
    getCharDetail(req,res)
})

router.post('/fav',(req,res)=>{
    postFav(req,res)
})
router.delete('/fav/:id',(req,res)=>{
    deleteFav(req,res)
})