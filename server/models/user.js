const {Schema, model } = require("mongoose")
const BonusScheme = require("./bonus");
const bcrypt = require("bcrypt");
const { ObjectId } = require("mongodb");

const UserSchema = new Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, },
    email: {type: String, unique: true, },
    password:{type: String},
    tel: {type: String, },
    birth_date: {type: Date, },
    city: {type: String, },
    address: {type: String},
    gender: {type: String},
    role: {type: [String], default: ["user"]},
    bonuses: [BonusScheme], //TODO BonusesScheme
    basket: {type: Schema.Types.ObjectId, ref: "Basket"},
    orders: {type: [Schema.Types.ObjectId], ref: "Order"},
    instructions: {type: [Schema.Types.ObjectId], ref: "Instruction"},
    messages: {type: [Schema.Types.ObjectId], ref: "Message"},
    favorites: {type: [Schema.Types.ObjectId], ref: "Device"},
    compare: {type: [Schema.Types.ObjectId], ref: "Device"},
    googleId: {type: String},//if sign up via google
    facebookId: {type: String},//if sign up via facebook
    avatar: {type: String},
})

UserSchema.method("getBonuses", function() {
    const currentTime = new Date();
    const result = this.bocuses?.filter((bonus) => {
        bonus.exp_date > currentTime
    })
    return result
})

UserSchema.method("verifyPassword", function(password) {
    const isPassValid = bcrypt.compareSync(password, this.password);
    return isPassValid;
})


module.exports = model("User", UserSchema)