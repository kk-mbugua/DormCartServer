const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DeliverySchema = new Schema({
    _someId: Schema.Types.ObjectId,
    order:{
        type: Schema.Types.ObjectId,
        required: true
    },
    deliverer:{
        type: Schema.Types.ObjectId,
        required: true
    },
    assigned_by:{
        type: Schema.Types.ObjectId,
        required: true
    },
    expected_pickup_date:{
        type: Schema.Types.Date,
        required: true
    },
    actual_pickup_date:{
        type: Schema.Types.Date,
        required: false
    },
    expected_delivery_date:{
        type: Schema.Types.Date,
        required: true
    },
    actual_delivery_date:{
        type: Schema.Types.Date,
        required: false
    },
    picked_up:{
        type: Schema.Types.Boolean,
        required: false
    },
    deliverd:{
        type: Schema.Types.Boolean,
        required: false
    }
})

module.exports = mongoose.model("Delivery", DeliverySchema);