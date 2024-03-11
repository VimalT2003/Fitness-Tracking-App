const mongoose = require('mongoose')

const WorkoutSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    workoutType: { type: String, required: true },
    Duration: { type: String, required: true },
    intensity: { type: String, required: true },
    workoutDate: { type: Date, required: true }
},{
    timestamps:true,
})

const Workout = mongoose.model('workout', WorkoutSchema);
module.exports = Workout