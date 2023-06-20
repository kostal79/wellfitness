const MessageSequence = require("../models/messageSequence")

async function getNextSequenceValue(sequenceId) {
    const sequence = await MessageSequence.findByIdAndUpdate(
        sequenceId,
        {$inc: {value: 1}},
        {new: true, upsert: true}
    );
    return sequence.value
}

module.exports = getNextSequenceValue;