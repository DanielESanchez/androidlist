const {Router}=require('express');
const router = Router();

/*const user = require('../models/usersModel');
const admin = require('../models/adminModels');
const jwt = require('jsonwebtoken');
const bcrypt = require ('bcrypt-nodejs');*/

const appModel=require('../models/appModel')

router.post('/api/get-games', async (req,res)=>{
    const {limit} = req.body;
    console.log(limit);
    skipVar=(limit-1)*10
    if(limit==1){
        const apps = await appModel.find({category:'games'},{_id:0}).limit(10).sort({createdAt:-1});
    }
    const apps = await appModel.find({category:'games'},{_id:0}).limit(10).skip(skipVar).sort({createdAt:-1});
    
    const appsNum= await appModel.countDocuments({category:'games'});
    //console.log(apps)
    res.json({apps,appsNum});
})


router.get('/api/last-games',async (req,res)=>{
    const apps=await appModel.find({category:'games'},{code:1,name:1,image:1,_id:0}).limit(3).sort({createdAt:-1});
    res.json({apps});
})

module.exports = router;