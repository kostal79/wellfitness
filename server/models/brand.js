const { ObjectId } = require("mongodb");
const { Schema, model } = require("mongoose");

const BrandSchema = new Schema({
    name: {type: String, required: true, unique: true},
    logo_ref: {type: String},
    devices_ids: {type: [ObjectId], ref: "Device"},
    devices_types: [{type: [ObjectId], ref: "Types"}]
})

BrandSchema.method("addDeviceId", function(deviceId) {
    if (!this.devices_ids.includes(deviceId)){
        this.devices_ids.push(deviceId)
    }
})

module.exports = new model("Brand", BrandSchema)