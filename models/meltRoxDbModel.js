const { Schema, model } = require("mongoose");

let schema = new Schema({
  _id: {
    type: Number,
    required: true,
  },
  chipname: {
    type: String,
    required: true,
  },
  cx: {
    type: String,
    required: true,
  },
  cy: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  dtype: {
    type: String,
    required: true,
  },
  dye: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  radius: {
    type: String,
    required: true,
  },
  run: {
    type: String,
    required: true,
  },
  temps: {
    type: Number,
    required: true,
  },
  wells: {
    type: Number,
    required: true,
  },
  x: {
    type: Array,
    required: true,
  },
  y: {
    type: Array,
    required: true,
  },
});

const MeltRoxDb = model("MeltRoxDB", schema);
module.exports = MeltRoxDb;
