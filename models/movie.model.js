const mongoose = require("mongoose");
const { Schema, model } = mongoose;
require("../models/Celebrity.model");
const movieSchema = new Schema(
  {
    title: String,
    genre: String,
    plot: String,
    cast: [{ type: Schema.Types.ObjectId, ref: "Celebrity" }],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Movie", movieSchema);
