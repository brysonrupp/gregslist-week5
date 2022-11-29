import { Schema } from "mongoose";

export const HomeSchema = new Schema({
    description: { type: String },
    year: { type: Number, required: true },
    price: { type: Number, required: true, default: 1 },
    size: { type: Number, required: true },
    imgUrl: { type: String, required: true, maxLength: 255 }
}, { timestamps: true, toJSON: { virtuals: true } }) 