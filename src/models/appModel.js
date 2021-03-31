const {Schema, model} = require('mongoose');
//const bcrypt = require ('bcrypt-nodejs');

const appSchema = new Schema({
    code:String,
    name:String,
    linkDownload:String,
    description:String,
    googlePlayLink:String,
    image:String,
    shortDesc:String,
    category:String
}, {
    timestamps: true
});

//appSchema.index({email:1},{unique:true});

module.exports=model('app', appSchema);