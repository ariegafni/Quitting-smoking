import React, { useState } from 'react';

const Goals: React.FC = () => {
  const [dailyGoal, setDailyGoal] = useState<number | undefined>(undefined);
  const [weeklyGoal, setWeeklyGoal] = useState<number | undefined>(undefined);
  const [dailyDate, setDailyDate] = useState<string>('');
  const [weeklyDate, setWeeklyDate] = useState<string>('');

  // פונקציה לטיפול בשינוי הערכים של היעד היומי
  const handleDailyGoalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDailyGoal(Number(event.target.value));
  };

  // פונקציה לטיפול בשינוי הערכים של היעד השבועי
  const handleWeeklyGoalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeeklyGoal(Number(event.target.value));
  };

  // פונקציה לטיפול בשינוי תאריך ליעד היומי
  const handleDailyDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDailyDate(event.target.value);
  };

  // פונקציה לטיפול בשינוי תאריך ליעד השבועי
  const handleWeeklyDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeeklyDate(event.target.value);
  };

  // פונקציה לטיפול ב-Submit של היעד היומי
  const handleDailySubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`יעד יומי: ${dailyGoal}, תאריך: ${dailyDate}`);
    // שליחת הנתונים ל-API או שמירה במערכת
  };

  // פונקציה לטיפול ב-Submit של היעד השבועי
  const handleWeeklySubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`יעד שבועי: ${weeklyGoal}, תאריך: ${weeklyDate}`);
    // שליחת הנתונים ל-API או שמירה במערכת
  };

  return (
    <div>
      {/* טופס יעד יומי */}
      <form onSubmit={handleDailySubmit}>
        <label>
          select date:
          <input
            type="date"
            value={dailyDate}
            onChange={handleDailyDateChange}
          />
        </label>
        <label>
          daily goal:
          <input
            type="number"
            value={dailyGoal || ''}
            onChange={handleDailyGoalChange}
          />
          Cigarettes
        </label>
        <button type="submit">save daily goal  </button>
      </form>

      {/* טופס יעד שבועי */}
      <form onSubmit={handleWeeklySubmit}>
        <label>
        select week:
          <input
            type="date"
            value={weeklyDate}
            onChange={handleWeeklyDateChange}
          />
        </label>
        <label>
          weekly goal
          <input
            type="number"
            value={weeklyGoal || ''}
            onChange={handleWeeklyGoalChange}
          />
          Cigarettes
        </label>
        <button type="submit">  save weekly goal</button>
      </form>
    </div>
  );
};

export default Goals;
