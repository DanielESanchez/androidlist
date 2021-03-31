const {Router}=require('express');
const router = Router();

/*const user = require('../models/usersModel');
const admin = require('../models/adminModels');
const jwt = require('jsonwebtoken');
const bcrypt = require ('bcrypt-nodejs');*/

const appModel=require('../models/appModel')

router.post('/api/get-post', async (req,res)=>{
    /*const app =new appModel({name:'Musixmatch',link:'Esto es el enlace de musixmatch',description:'Esta es la descripcion de musixmatch',googlePlayLink:'Este es el enlace de google play',image:'Esta es la imagen de google Play'})
    app.save()*/
    const {code}=req.body
    const app = await appModel.findOne({code},{_id:0});
    //const appsNum= await appModel.countDocuments();
    //console.log(apps)
    res.json({app});
})



module.exports = router;