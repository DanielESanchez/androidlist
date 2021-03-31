const {Router}=require('express');
const router = Router();

/*const user = require('../models/usersModel');
const admin = require('../models/adminModels');
const jwt = require('jsonwebtoken');
const bcrypt = require ('bcrypt-nodejs');*/

const appModel=require('../models/appModel')
const adminModel = require('../models/adminModel')

router.post('/api/delete-post',verifyToken, async (req,res)=>{
    /*const app =new appModel({name:'Musixmatch',link:'Esto es el enlace de musixmatch',description:'Esta es la descripcion de musixmatch',googlePlayLink:'Este es el enlace de google play',image:'Esta es la imagen de google Play'})
    app.save()*/
    const {code}=req.body
    let token = req.headers.authorization.split(' ')[1];
    if(admin = adminModel.findOne({token})){ 
        const app = await appModel.deleteOne({code});
        //const appsNum= await appModel.countDocuments();
        return res.json({state:'done'});
    }
    return res.status(401).json({state:'auth'});
})


module.exports = router;