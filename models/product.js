import mongoose from "mongoose";

import { Schema } from "mongoose";

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    default: "Updating",
  }
},{
    versionKey: false,
    timestamps: true
});

export default mongoose.model("Product" , productSchema)
