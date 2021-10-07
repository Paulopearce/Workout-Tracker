const { model, Schema } = require("mongoose")
const db = require('../models'); //
const Workout = new Schema({
  day: {
    type: Date,
    default: () => new Date() /* makes new date default */
  },
  exercises: [{
    type: {
      type: String,
      required: 'Enter an exercise type', /* placeholder text */
      trim: true /* Deletes extra spaces before and after text */
    },
    name: {
      type: String,
      required: 'Enter a name',
      trim: true 
    },
    duration: {
      type: Number,
      required: true,
      trim: true
    },
    weight: {
      type: Number,
      trim: true
    },
    reps: {
      type: Number,
      trim: true
    },
    sets: {
      type: Number,
      trim: true
    },
    distance: {
      type: Number,
      trim: true
    }
  }]
})

module.exports = model("Workout", Workout);