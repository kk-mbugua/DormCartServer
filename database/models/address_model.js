const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AddressSchema = new Schema({
    street: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    zip: {
        type: String,
        required: true,
    }
})

// Compile model from schema
module.exports = mongoose.model("Address", AddressSchema);
