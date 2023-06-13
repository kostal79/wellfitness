const { ObjectId } = require("mongodb");
const { Schema, model } = require("mongoose");
const getNextSequenceValue = require("../utils/getNextSequenceValue");

const OrderSchema = new Schema({
    number: Number,
    user_id: { type: ObjectId, ref: "User" },
    created_at: { type: Date, default: Date.now },
    devices: [{ type: ObjectId, ref: "Device" }],
    payment_method: String,
    order_status: {
        type: String, enum: [
            "Заказ оформлен",
            "Заказ в сборке",
            "Заказ готов",
            "Заказ выполнен",
            "Заказ доставляется",
        ],
        default: "Заказ оформлен"
    },
    payment_status: {
        type: String,
        enum: [
            "Не оплачен",
            "Оплачен"
        ],
        default: "Не оплачен",
    },
    delivery: {type: Date}
})


OrderSchema.pre("save", async function(next) {
    if (!this.number) {
        this.number = await getNextSequenceValue("orderSequence")
    };
    next();
})

module.exports = new model("Order", OrderSchema);