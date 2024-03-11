const mongoose = require('mongoose');

const GoalSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    goalType: { type: String, required: true },
    target: { type: Number, required: true },
    progress: { type: Number, default: 0 },
    goalDeadline: { type: Date, required: true },
    currentstatus: { type: String, default: 'Pending' }
}, {
    timestamps: true 
});

const Goal  = mongoose.model('Goal', GoalSchema);
 module.exports = Goal;