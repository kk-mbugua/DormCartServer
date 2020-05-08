const mongoose = require("mongoose")
const Schema = mongoose.Schema
const Types = Schema.Types

const BidSchema = new Schema({
    _someID: Types.ObjectId,
    order:{
        type: Types.ObjectId,
        required: true
    },
    deliverer: {
        type: Types.ObjectId,
        required: true
    },
    expected_pickup_date: {
        type: Types.Date,
        required: true
    },
    expected_delivery_data:{
        type: Types.Date,
        required: true
    },
    date_submitted:{
        type: Types.Date,
        required: true,
        default: Date.now()
    }
})

module.exports = mongoose.model("Bid", BidSchema)