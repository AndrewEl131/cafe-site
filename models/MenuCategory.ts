import mongoose, { Schema, model, models } from "mongoose";

const MenuCategorySchema = new Schema({
  kaTitle: { type: String, required: true },
  enTitle: { type: String, required: true },
  items: [
    {
      kaTitle: { type: String, required: true },
      enTitle: { type: String, required: true },
      priceFrom: { type: Number, required: true },
      priceTo: { type: Number, required: true },
    },
  ],
});

export default models.MenuCategory || model("MenuCategory", MenuCategorySchema);
