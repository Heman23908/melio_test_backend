const { Schema, model } = require("mongoose");

let schema = new Schema({
  _id: Number,
  chipname: String,
  cx: String,
  cy: String,
  date: String,
  dtype: String,
  dye: String,
  name: String,
  radius: String,
  run: String,
  temps: Number,
  wells: Number,
  x: Array,
  y: Array,
});

const MeltEvaDb = model("MeltEvaDB", schema);
module.exports = MeltEvaDb;
