const OrderSequence = require("../models/orderSequence")

async function getNextSequenceValue(sequenceId) {
    const sequence = await OrderSequence.findByIdAndUpdate(
        sequenceId,
        {$inc: {value: 1}},
        {new: true, upset: true}
    );
    return sequence.value
}

module.exports = getNextSequenceValue;