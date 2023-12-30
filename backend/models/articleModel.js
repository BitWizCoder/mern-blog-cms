const mongoose = require("mongoose");

const articleSchema = mongoose.Schema(
  {
    title: String,
    body: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Article", articleSchema);
