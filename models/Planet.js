const { Schema, model } = require("mongoose");

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  phys: {
    type: String,
    required: true,
  },
  geo: {
    type: String,
    required: true,
  },
});

module.exports = model("Planet", schema);
