const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const item_model = require("./item_model")
const phone_model = require("./phone_model")
const address_model = require("./address_model")

"use strict"
var OrderSchema = new Schema({
  _someId: Schema.Types.ObjectId,
  full_name: {
    type: String,
    required: true,
  },
  university: {
    type: String,
    required: true,
  },
  delivery_address: {
    type: address_model.schema,
    required: true,
  },
  items: {
    type: [item_model.schema],
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  assigned: {
    type: Boolean,
    required: true,
    default: false,
  },
});

// Compile model from schema
module.exports = mongoose.model("Order", OrderSchema);
