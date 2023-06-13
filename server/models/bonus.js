const { Schema, model } = require("mongoose");

const BonusScheme = new Schema({
    quantity: {type: Number},
    exp_date: {type: Date}
})


module.exports = BonusScheme