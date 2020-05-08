const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
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
})

module.exports = mongoose.model("Admin", AdminSchema);