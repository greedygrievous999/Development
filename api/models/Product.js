const mongoose = require ("mongoose")

const ProductSchema = new mongoose.Schema(
    {
        title:{ type: String , required: true},
        artist: { type: String, required: true},
        label: { type: String, requied: true },
        genre: { type: String, requied: true },
        price: { type: Number, requied: true },
        daysinstock: { type: Number, requied: true },
        img: { type: String, requied: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product",ProductSchema)