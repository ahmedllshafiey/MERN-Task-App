// require mongoose to use schema
const mongoose = require('mongoose')

// creating schema to define model that well handle requests
const taskSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true
  }
}, {timestamps: true});

module.exports = mongoose.model("tasks", taskSchema);