const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const accountSchema = new Schema({
    username: String,
    password: String,
    age:Number,
    email: String
}, {
    collection: 'Account'
});

const AccountModel =  mongoose.model("Account",accountSchema);
module.exports = AccountModel;