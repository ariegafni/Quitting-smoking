const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  dailyGoal: { type: Number, required: false },
  weeklyGoal: { type: Number, required: false },
  date: { type: String, required: true },
});

module.exports = mongoose.model('Goal', goalSchema);
