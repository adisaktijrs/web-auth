require('dotenv').config();
const mongoose = require("mongoose");
// const encrypt = require("mongoose-encryption");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require('mongoose-findorcreate');



//Model
const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    googleId: String,
    secret: String
});

// userSchema.plugin(encrypt, {secret: process.env.SECRET, encryptedFields: ["password"] });
userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

module.exports = mongoose.model("User", userSchema);