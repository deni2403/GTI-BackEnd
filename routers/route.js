const express = require('express')
const {addUser} = require('../controllers/userControllers')
const router = express.Router()


router.get('/', (req,res)=>{
    console.log("server connected");
})
router.post('/addUser',addUser)

module.exports= router