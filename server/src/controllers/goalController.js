const Goal = require('../models/goalModel'); // ייבוא המודל של היעדים

// פונקציה לשמירת יעד יומי
const saveDailyGoal = async (req, res) => {
  try {
    const { dailyGoal, date } = req.body;
    const newGoal = new Goal({ dailyGoal, date });
    await newGoal.save();
    res.status(201).json({ message: 'Daily goal saved successfully', goal: newGoal });
  } catch (error) {
    res.status(500).json({ message: 'Failed to save daily goal', error });
  }
};

// פונקציה לשמירת יעד שבועי
const saveWeeklyGoal = async (req, res) => {
  try {
    const { weeklyGoal, date } = req.body;
    const newGoal = new Goal({ weeklyGoal, date });
    await newGoal.save();
    res.status(201).json({ message: 'Weekly goal saved successfully', goal: newGoal });
  } catch (error) {
    res.status(500).json({ message: 'Failed to save weekly goal', error });
  }
};

// פונקציה לשליפת כל היעדים
const getGoals = async (req, res) => {
  try {
    const goals = await Goal.find();
    res.status(200).json(goals);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch goals', error });
  }
};

module.exports = {
  saveDailyGoal,
  saveWeeklyGoal,
  getGoals,
};
