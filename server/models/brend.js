const { ObjectId } = require("mongodb");
const { Schema, model } = require("mongoose");

const BrendSchema = new Schema({
    name: {type: String, require: true},
    logo_ref: {type: String},
    devices_ids: [{type: ObjectId, ref: "Device"}]
})

BrendSchema.method("addDeviceId", function(deviceId) {
    if (!this.devices_ids.includes(deviceId)){
        this.devices_ids.push(deviceId)
    }
})

module.exports = new model("Brend", BrendSchema)