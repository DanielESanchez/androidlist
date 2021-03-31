const {Router}=require('express');
const router = Router();

/*const user = require('../models/usersModel');
const admin = require('../models/adminModels');
const jwt = require('jsonwebtoken');
const bcrypt = require ('bcrypt-nodejs');*/

const appModel=require('../models/appModel')

router.post('/api/upload',verifyToken, async (req,res)=>{
    const {name, description,linkDownload,googlePlayLink,image,category}=req.body
    const currentDate = new Date();
    const code = currentDate.getTime();
    const shortDesc= description.substring(0,400)+'...';
    console.log(shortDesc)
    const app= new appModel({code,name, description,linkDownload, googlePlayLink,image,shortDesc,category})
    app.save();
    res.json({state:'done'})
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