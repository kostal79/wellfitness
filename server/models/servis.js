const { ObjectId } = require("mongodb")
const {Schema, model } = require("mongoose")

const ServisSchema = new Schema({
    number: {type: Number},
    user_id: {type: ObjectId, ref: "User", require: true},
    created_at: {type: Date, default: Date.now },
    device:{
        brand: {type: ObjectId, ref: "Brend"},
        model: {type: ObjectId, ref: "Device"}
    },
    serial_number: {type: String, require: true},
    varanty_number: {type:String, require: true},
    purchase_date: {type: Date, require: true},
    address:{
        city:{type:String, require: true},
        street: String,
        house: Number,
        block: Number,
        apart: Number,
    },
    message: String,
    file_ref: String,
    contacts: {
        first_name: {type:String, require: true},
        tel: {type: String, require: true},
        email: {type: String, require: true}
    }
})

ServisSchema.pre("save", async function(next) {
    if (!this.number) {
        this.number = await getNextSequenceValue("orderSequence")
    };
    next();
})

module.exports = new model("Servis", ServisSchema)
