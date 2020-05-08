const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    count: {
        type: Number,
        required: true,
    }
})

// Compile model from schema
module.exports = mongoose.model("Item", ItemSchema);