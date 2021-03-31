const {Router}=require('express');
const router = Router();

/*const user = require('../models/usersModel');
const admin = require('../models/adminModels');
const jwt = require('jsonwebtoken');
const bcrypt = require ('bcrypt-nodejs');*/

const appModel=require('../models/appModel')
const adminModel = require('../models/adminModel')

router.post('/api/upload', async (req,res)=>{
    const {name, description,linkDownload,googlePlayLink,image,category}=req.body
    let token = req.headers.authorization.split(' ')[1];
    if(admin = adminModel.findOne({token})){ 
        const currentDate = new Date();
        const code = currentDate.getTime();
        const shortDesc= description.substring(0,400)+'...';
        console.log(shortDesc)
        const app= new appModel({code,name, description,linkDownload, googlePlayLink,image,shortDesc,category})
        app.save();
        res.json({state:'done'})
    }
    return res.status(401).json({state:'auth'});
    
})



module.exports = router;