require('dotenv').config();
const mongoose = require("mongoose");
// const encrypt = require("mongoose-encryption");
const passportLocalMongoose = require("passport-local-mongoose");


//Model
const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

// userSchema.plugin(encrypt, {secret: process.env.SECRET, encryptedFields: ["password"] });
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);