const mongoose = require('mongoose'); 
const config  = require('config');
const bcrypt  = require('bcrypt');
const jwt = require('jsonwebtoken');
const { ModeCommentRounded } = require('@material-ui/icons');


const UserSchema = new mongoose.Schema({
    firstname: {type: String ,required: true},
    lastname:{type: String, required: true},
    email: {type: String, required: true},
    country: { type: String , required: true},
    telephone: { type: String, required: true},
    password: {type: String ,required: true}
})

UserSchema.methods.generateToken = function(){
    return jwt.sign({id:this._id},config.get('jwtprivatekey'));
}
UserSchema.methods.hashPassword = async function(){
    return await bcrypt.hash(this.password,await bcrypt.genSalt(10));
}
UserSchema.methods.validPassword = function(password){
    return bcrypt.compare(this.password,password);
}

const User = mongoose.model('User',UserSchema);
module.exports = User;