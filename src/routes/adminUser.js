const {Router}=require('express');
const router = Router();

const admin = require('../models/adminModel');
const jwt = require('jsonwebtoken');
const bcrypt = require ('bcrypt');

//La funcion debe ser async para poder usar await
router.post('/api/signupa', async (req, res)=>{
   // return res.json({estado:'password'})
    const email = 'admindaniel@androidlist.tk'
    const password = 'Admin123#'  
            const salt = bcrypt.genSaltSync();
            const hash= bcrypt.hashSync(password, salt);
            /*GUARDADO EN LA BASE*/
            const newAdmin = new admin ({username:email, password:hash, token:""});
            await newAdmin.save();
            //db.collection('admins2').insertOne(newAdmin)
            const token = await jwt.sign({_id: newAdmin._id}, process.env.KEY);
            await admin.updateOne({username:email},{$set:{token:token}});
        
    });

module.exports = router;