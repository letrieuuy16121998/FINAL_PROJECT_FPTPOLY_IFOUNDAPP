const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const orderSchema = new Schema({
    id: { type: ObjectId},
    name: { type: String },
    price: { type: Number},
    image: { type: String },
    quantity: { type : Number},
    type:{ type: String },
    status:{type: String, default:"Order is being processed"},
    notification:{type: String, default: ""},
     email: { type: Schema.Types.String, ref: 'user'},
     nameuser: {type: String},
     address: {type: String},
     phone:{type: String},
     undoorder_id: { type: Schema.Types.ObjectId, ref: 'undoorder'},
}, { timestamps: true })

module.exports = mongoose.model('order', orderSchema);