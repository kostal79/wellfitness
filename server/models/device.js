const { ObjectId } = require("mongodb");
const { Schema, model, } = require("mongoose");

const DeviceSchema = new Schema({
    name: { type: String, required: true },
    brand: {
        brand_name: { type: String },
        brand_id: { type: ObjectId, ref: "Brand" },
    },
    price: {
        diler: { type: Number, default: 0 },
        retail: { type: Number, default: 0 },
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
            user_ids: { type: [ObjectId], ref: "User" },
        },
        quality: {
            score: { type: [Number], default: [0], enum: [0, 1, 2, 3, 4, 5] },
            user_ids: { type: [ObjectId], ref: "User" },

        },
        comfort: {
            score: { type: [Number], default: [0], enum: [0, 1, 2, 3, 4, 5] },
            user_ids: { type: [ObjectId], ref: "User" },
        },
        price: {
            score: { type: [Number], default: [0], enum: [0, 1, 2, 3, 4, 5] },
            user_ids: { type: [ObjectId], ref: "User" },
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
    discount: {
        diler: { type: Number, default: 0 }, //60 (discount 60%)
        retail: { type: Number, default: 0 },//60 (discount 60%)
    },
    usage: String,//"home", "prof"
    bonuses: Number,
    sign_profit: Boolean,
    sign_recommend: Boolean,
    sign_new: Boolean,
    type: {
        type_name: { type: String },//Беговая дорожка
        type_id: { type: ObjectId, ref: "Type" }
    },
    group: {
        group_name: {type: String},
        group_id: {type: ObjectId, ref: "Group"}
    },
    feedback: {
        feedbacks_ids: { type: [ObjectId], ref: "Feedback" },
        users_ids: { type: [ObjectId], ref: "User" }
    },
    docs_ids: [{ type: ObjectId, ref: "Doc" }]
}, {
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
})

DeviceSchema.virtual('rating_quality_average').get(function () {
    const totalScores = this.rating.quality.score.reduce((prev, curr) => prev + curr, 0);
    const amountScores = this.rating.quality.user_ids.length;
    if (amountScores > 0) {
        return totalScores / amountScores;
    } else {
        return totalScores
    }
});

DeviceSchema.virtual('rating_comfort_average').get(function () {
    const totalScores = this.rating.comfort.score.reduce((prev, curr) => prev + curr, 0);
    const amountScores = this.rating.comfort.user_ids.length;
    if (amountScores > 0) {
        return totalScores / amountScores;
    } else {
        return totalScores
    }
});

DeviceSchema.virtual('rating_price_average').get(function () {
    const totalScores = this.rating.price.score.reduce((prev, curr) => prev + curr, 0);
    const amountScores = this.rating.price.user_ids.length;
    if (amountScores > 0) {
        return totalScores / amountScores;
    } else {
        return totalScores
    }
});

DeviceSchema.virtual('rating_functionality_average').get(function () {
    const totalScores = this.rating.functionality.score.reduce((prev, curr) => prev + curr, 0);
    const amountScores = this.rating.functionality.user_ids.length;
    if (amountScores > 0) {
        return totalScores / amountScores;
    } else {
        return totalScores
    }
});

DeviceSchema.virtual('rating_average').get(function () {
    const totalScores = this.rating_quality_average + this.rating_comfort_average + this.rating_price_average + this.rating_functionality_average;
    return Math.round(totalScores / 4)
});

DeviceSchema.virtual('special_price.diler').get(function () {
    if (this.discount.diler > 0 && this.price.diler > 0) {
        const newPrice = this.price.diler - (this.price.diler * this.discount.diler / 100)
        return Math.round(newPrice);
    } else {
        return this.price.diler;
    }
});

DeviceSchema.virtual('special_price.retail').get(function () {
    if (this.discount.retail > 0 && this.price.retail > 0) {
        const newPrice = this.price.retail - (this.price.retail * this.discount.retail / 100)
        return Math.round(newPrice);
    } else {
        return this.price.retail;
    }
});

DeviceSchema.virtual('full_name').get(function () {
    return `${this.type.type_name} ${this.brand.brand_name} ${this.name}`;
});

DeviceSchema.method("voteRatingQuality", function (score, userId) {
    const userVoted = this.rating.quality.user_ids.includes(userId);
    if (!userVoted) {
        this.rating.quality.score.push(score);
        this.rating.quality.user_ids.push(userId)
    }
})

DeviceSchema.method("voteRatingFunctionality", function (score, userId) {
    const userVoted = this.rating.functionality.user_ids.includes(userId);
    if (!userVoted) {
        this.rating.functionality.score.push(score);
        this.rating.functionality.user_ids.push(userId)
    }
})

DeviceSchema.method("voteRatingComfort", function (score, userId) {
    const userVoted = this.rating.comfort.user_ids.includes(userId);
    if (!userVoted) {
        this.rating.comfort.score.push(score)
        this.rating.comfort.user_ids.push(userId)
    }
})

DeviceSchema.method("voteRatingPrice", function (score, userId) {
    const userVoted = this.rating.price.user_ids.includes(userId);
    if (!userVoted) {
        this.rating.price.score.push(score)
        this.rating.price.user_ids.push(userId)
    }
})

DeviceSchema.method("removeDoc", function (docId) {
    this.docs_ids.pull(docId);
});


DeviceSchema.method("isPostUnique", function (userId) {
    const usersList = this.feedback.users_ids;
    if (usersList.includes(userId)) {
        return true
    }
    return false
})

DeviceSchema.method("addFeedback", function (fbId, userId) {
    const feedbackList = this.feedback.feedbacks_ids;
    const usersIds = this.feedback.users_ids;
    feedbackList.push(fbId);
    usersIds.push(userId);
})

DeviceSchema.method("removePost", function (feedId, userId) {
    this.feedback.feedbacks_ids.pull(feedId);
    this.feedback.users_ids.pull(userId);
});

module.exports = new model("Device", DeviceSchema)