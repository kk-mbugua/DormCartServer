const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PhoneSchema = new Schema({
    country_code: {
        type: String,
        required: true,
      },
      area_code: {
        type: String,
        required: false,
      },
      number: {
        type: String,
        required: true,
      },
})

// Compile model from schema
module.exports = mongoose.model("Phone", PhoneSchema);