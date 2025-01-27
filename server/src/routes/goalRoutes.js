const express = require('express');
const { saveDailyGoal, saveWeeklyGoal, getGoals } = require('../controllers/goalController');

const router = express.Router();

// נתיב לשמירת יעד יומי
router.post('/daily-goals', saveDailyGoal);

// נתיב לשמירת יעד שבועי
router.post('/weekly-goals', saveWeeklyGoal);

// נתיב לשליפת כל היעדים
router.get('/goals', getGoals);

module.exports = router;
