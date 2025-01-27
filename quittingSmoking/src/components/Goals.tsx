import React, { useState } from 'react';
import { sendDailyGoal, sendWeeklyGoal } from '../API/api';

const Goals: React.FC = () => {
  const [dailyGoal, setDailyGoal] = useState<number | undefined>(undefined);
  const [weeklyGoal, setWeeklyGoal] = useState<number | undefined>(undefined);
  const [dailyDate, setDailyDate] = useState<string>('');
  const [weeklyDate, setWeeklyDate] = useState<string>('');

  // טיפול בשינויי קלט
  const handleDailyDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDailyDate(event.target.value);
  };

  const handleWeeklyDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeeklyDate(event.target.value);
  };

  const handleDailyGoalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDailyGoal(Number(event.target.value));
  };

  const handleWeeklyGoalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeeklyGoal(Number(event.target.value));
  };

  // קריאה לשליחת יעד יומי
  const handleDailySubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (dailyGoal && dailyDate) {
      try {
        const response = await sendDailyGoal(dailyGoal, dailyDate);
        console.log("Daily goal sent successfully:", response);
      } catch (error) {
        console.error("Failed to send daily goal:", error);
      }
    } else {
      console.error("Please provide both a daily goal and a date.");
    }
  };

  // קריאה לשליחת יעד שבועי
  const handleWeeklySubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (weeklyGoal && weeklyDate) {
      try {
        const response = await sendWeeklyGoal(weeklyGoal, weeklyDate);
        console.log("Weekly goal sent successfully:", response);
      } catch (error) {
        console.error("Failed to send weekly goal:", error);
      }
    } else {
      console.error("Please provide both a weekly goal and a date.");
    }
  };

  return (
    <div>
      {/* טופס יעד יומי */}
      <form onSubmit={handleDailySubmit}>
        <label>
          Select date:
          <input
            type="date"
            value={dailyDate}
            onChange={handleDailyDateChange}
          />
        </label>
        <label>
          Daily goal:
          <input
            type="number"
            value={dailyGoal || ''}
            onChange={handleDailyGoalChange}
          />
          Cigarettes
        </label>
        <button type="submit">Save daily goal</button>
      </form>

      {/* טופס יעד שבועי */}
      <form onSubmit={handleWeeklySubmit}>
        <label>
          Select week:
          <input
            type="date"
            value={weeklyDate}
            onChange={handleWeeklyDateChange}
          />
        </label>
        <label>
          Weekly goal:
          <input
            type="number"
            value={weeklyGoal || ''}
            onChange={handleWeeklyGoalChange}
          />
          Cigarettes
        </label>
        <button type="submit">Save weekly goal</button>
      </form>
    </div>
  );
};

export default Goals;
