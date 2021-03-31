const {Router}=require('express');
const router = Router();

/*const user = require('../models/usersModel');
const admin = require('../models/adminModels');
const jwt = require('jsonwebtoken');
const bcrypt = require ('bcrypt-nodejs');*/

const appModel=require('../models/appModel')

router.post('/api/search', async (req,res)=>{
    const {search,limit} = req.body;
    console.log(req.body);
    skipVar=(limit-1)*10
    if(limit==1){
        const apps = await appModel.find({name:{ $regex: ".*"+search+".*" , $options: "si" } },{_id:0}).limit(10).sort({createdAt:-1});
    }
    const apps = await appModel.find({name:{ $regex: ".*"+search+".*" , $options: "si" } },{_id:0}).limit(10).skip(skipVar).sort({createdAt:-1});
    
    const appsNum= await appModel.countDocuments({name:{ $regex: ".*"+search+".*" , $options: "si" } });
    //console.log(apps)
    res.json({apps,appsNum});
})


module.exports = router;