const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Types = Schema.Types

const DelivererSchema = new Schema({
    _someId: Schema.Types.ObjectId,
    full_name:{
        type: Types.String,
        required: true
    },
    email:{
        type: Types.String,
        required: true
    },
    phone:{
        type: Types.String,
        required: true
    },
    identification:{
        type: Types.String,
        required: true
    },
    number_of_deliveries:{
        type: Types.Number,
        required: true,
        default: 0
    },
    number_of_bids:{
        type: Types.Number,
        required: true,
        default: 0
    }
})

module.exports = mongoose.model("Deliverer", DelivererSchema);