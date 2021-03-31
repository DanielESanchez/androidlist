const {Router}=require('express');
const router = Router();

/*const user = require('../models/usersModel');
const admin = require('../models/adminModels');
const jwt = require('jsonwebtoken');
const bcrypt = require ('bcrypt-nodejs');*/

const appModel=require('../models/appModel')

router.post('/api/delete-post',verifyToken, async (req,res)=>{
    /*const app =new appModel({name:'Musixmatch',link:'Esto es el enlace de musixmatch',description:'Esta es la descripcion de musixmatch',googlePlayLink:'Este es el enlace de google play',image:'Esta es la imagen de google Play'})
    app.save()*/
    const {code}=req.body
    const app = await appModel.deleteOne({code});
    //const appsNum= await appModel.countDocuments();
    res.json({state:'done'});
})

async function verifyToken(req, res, next) {
    try {
        if (!req.headers.authorization) {
            return res.status(401).send('Unauhtorized Request');
        }
        let token = req.headers.authorization.split(' ')[1];
        if (token === 'null') {
            return res.status(401).send('Unauhtorized Request');
        }

        const payload = await jwt.verify(token, process.env.KEY);
        if (!payload) {
            return res.status(401).send('Unauhtorized Request');
        }
        req.userId = payload._id;
        next();
    } catch(e) {
        //console.log(e)
        return res.status(401).send('Unauhtorized Request');
    }
}

module.exports = router;