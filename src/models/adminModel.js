const {Schema, model} = require('mongoose');
//const bcrypt = require ('bcrypt-nodejs');

const adminSchema = new Schema({
    username:String,
    password:String,
    token:String
}, {
});

//appSchema.index({email:1},{unique:true});

module.exports=model('admin', adminSchema);