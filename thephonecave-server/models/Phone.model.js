const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const phoneSchema = new Schema(
    {
        name: {
            type: String,
        },
        manufacturer: {
            type: String,
        },
        description: {
            type: String,
        },
        color: {
            type: String,
        },
        price: {
            type: Number,
        },
        image: {
            type: String,
            imageUrl: String
        },
        screen: {
            type: String,
        },
        processor: {
            type: String,
        },
        ram: {
            type: Number,
        },
        id: {
            type: Schema.Types.ObjectId,
        },
    },
    {
        timestamps: true,
    }
);

const Phone = model("Phone", phoneSchema);

module.exports = Phone;