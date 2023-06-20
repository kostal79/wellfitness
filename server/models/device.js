const { ObjectId } = require("mongodb");
const { Schema, model, } = require("mongoose");

const DeviceSchema = new Schema({
    name: { type: String, required: true },
    brand: { type: ObjectId, ref: "Brand", },
    price: {
        diler: Number,
        retail: Number,
    },
    configuration: {
        size: Number,
        weight: Number,
        color: String,
        frame_color: String,
        upholstery_color: String,
    },
    rating: {
        functionality: {
            score: {
                type: [Number],
                default: [0],
                enum: [0, 1, 2, 3, 4, 5],
            },
            user_ids: [{ type: ObjectId, ref: "User" }],
        },
        quality: {
            score: { type: [Number], default: [0], enum: [0, 1, 2, 3, 4, 5] },
            user_ids: [{ type: ObjectId, ref: "User" }],

        },
        comfort: {
            score: { type: [Number], default: [0], enum: [0, 1, 2, 3, 4, 5] },
            user_ids: [{ type: ObjectId, ref: "User" }],
        },
        price: {
            score: { type: [Number], default: [0], enum: [0, 1, 2, 3, 4, 5] },
            user_ids: [{ type: ObjectId, ref: "User" }],
        },
    },
    images_refs: [String],//references
    is_in_showroom: Boolean,//is device in show-room
    quantity: { type: Number, default: 0 },
    characteristics: {
        main: {
            type: String,
            engine_power: Number,
            engine_type: String,
            speed_control_min: Number,
            speed_control_max: Number,
            surface: String,
            incline_min: Number,
            incline_max: Number,
            surface_width: Number,
            surface_lenght: Number,
            shaft_diameter: Number,
            training_programm: String,
        },
        multimedia: {
            type: String,
            engine_power: Number,
            engine_type: String,
            speed_control_min: Number,
            speed_control_max: Number,
            surface: String,
            incline_min: Number,
            incline_max: Number,
            surface_width: Number,
            surface_lenght: Number,
            shaft_diameter: Number,
            training_programm: String,
        },
        additionaly: {
            type: String,
            engine_power: Number,
            engine_type: String,
            speed_control_min: Number,
            speed_control_max: Number,
            surface: String,
            incline_min: Number,
            incline_max: Number,
            surface_width: Number,
            surface_lenght: Number,
            shaft_diameter: Number,
            training_programm: String,
        }
    },
    discount_price: Number,
    usage: String,
    bonuses: Number,
    sign_profit: Boolean,
    sign_recomend: Boolean,
    sign_new: Boolean,  
    use: String,
    type: String,
    feedback: {
        feedbacks_ids: {type: [ObjectId], ref: "Feedback"},
        users_ids:{type: [ObjectId], ref: "User"}
    },
    docs_ids: [{type: ObjectId, ref: "Doc"}]
})

DeviceSchema.virtual('rating.quality.average').get(function () {
    const totalScores = this.rating.quality.score.reduce((prev, curr) => prev + curr, 0);
    const amountScores = this.rating.quality.user_ids.length;
    return totalScores / amountScores;
});

DeviceSchema.virtual('rating.comfort.average').get(function () {
    const totalScores = this.rating.comfort.score.reduce((prev, curr) => prev + curr, 0);
    const amountScores = this.rating.comfort.user_ids.length;
    return totalScores / amountScores;
});

DeviceSchema.virtual('rating.price.average').get(function () {
    const totalScores = this.rating.price.score.reduce((prev, curr) => prev + curr, 0);
    const amountScores = this.rating.price.user_ids.length;
    return totalScores / amountScores;
});

DeviceSchema.virtual('rating.functionality.average').get(function () {
    const totalScores = this.rating.functionality.score.reduce((prev, curr) => prev + curr, 0);
    const amountScores = this.rating.functionality.user_ids.length;
    return totalScores / amountScores;
});

DeviceSchema.method("voteRatingQuality", function(score, userId){
    const userVoted = this.rating.quality.user_ids.includes(userId);
    if (!userVoted) {
        this.rating.quality.score.push(score);
        this.rating.quality.user_ids.push(userId)
    }
})

DeviceSchema.method("voteRatingFunctionality", function(score, userId){
    const userVoted = this.rating.functionality.user_ids.includes(userId);
    if (!userVoted) {
        this.rating.functionality.score.push(score);
        this.rating.functionality.user_ids.push(userId)
    }
})

DeviceSchema.method("voteRatingComfort", function(score, userId){
    const userVoted = this.rating.comfort.user_ids.includes(userId);
    if (!userVoted) {
        this.rating.comfort.score.push(score)
        this.rating.comfort.user_ids.push(userId)
    } 
})

DeviceSchema.method("voteRatingPrice", function(score, userId){
    const userVoted = this.rating.price.user_ids.includes(userId);
    if (!userVoted) {
        this.rating.price.score.push(score)
        this.rating.price.user_ids.push(userId)
    }
})

DeviceSchema.method("removeDoc", function(docId) {
   this.docs_ids.pull(docId);
});


DeviceSchema.method("isPostUnique", function(userId){
    const usersList = this.feedback.users_ids;
    if (usersList.includes(userId)){
        return true
    }
    return false
}) 

DeviceSchema.method("addFeedback", function(fbId, userId) {
    const feedbackList = this.feedback.feedbacks_ids;
    const usersIds = this.feedback.users_ids;
    feedbackList.push(fbId);
    usersIds.push(userId);
})

DeviceSchema.method("removePost", function(feedId, userId) {
    this.feedback.feedbacks_ids.pull(feedId);
    this.feedback.users_ids.pull(userId);
});

module.exports = new model("Device", DeviceSchema)