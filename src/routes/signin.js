const {Router}=require('express');
const router = Router();

const admin = require('../models/adminModel');
const jwt = require('jsonwebtoken');
const bcrypt = require ('bcrypt');

router.post('/api/signin', async (req, res) => {
    const { username, pass } = req.body;
    const user =username.toLowerCase(); 
    if(Admin = await admin.findOne({username:user})){
        if(bcrypt.compareSync(pass, Admin.password)){
            token=Admin.token;
            return res.status(200).json({token:token, state:"admin"});   
        }else{
            return res.json({state:'password'});
        }  
    }return res.json({state:'user'});
});

//Funcion para verificar token
//Uso:
// router.get('/api/profile',verifyToken, async (req, res) => {

module.exports = router;