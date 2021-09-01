const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ExerciseSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
        },
    exercises: [{
        type: { 
            type: String,
            trim: true,
            required: 'Please enter type of exercise.'
        },
        name: {
            type: String,
            trim: true,
            required: 'Please enter exercise name.'
        },
        duration: {
            type: Number,
            required: 'Please enter a duration.'
        },
        weight: {
            type: Number,
            required: 'Please enter a weight.'
        },
        reps: {
            type: Number,
            required: 'Please enter a weight.'
        },
        sets: {
            type: Number,
            required: 'Please enter a number.'
        }
    }]
})

const Workout = mongoose.model('Workout', ExerciseSchema)
module.exports = Workout