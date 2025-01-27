import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface Goal {
  dailyGoal: number;
  weeklyGoal: number;
  date: string;
}

const GoalSummary: React.FC = () => {
  const [goals, setGoals] = useState<Goal[]>([]);

  // שליפת נתונים מהשרת
  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/goals"); // נתיב השרת
        const data = await response.json();
        setGoals(data); // עדכון הנתונים ב-state
      } catch (error) {
        console.error("Failed to fetch goals:", error);
      }
    };

    fetchGoals();
  }, []);

  return (
    <div>
      <h2>סיכום היעדים</h2>

      {/* טבלה להצגת הנתונים */}
      <table border={1} style={{ width: "100%", textAlign: "center", marginBottom: "20px" }}>
        <thead>
          <tr>
            <th>תאריך</th>
            <th>יעד יומי</th>
            <th>יעד שבועי</th>
          </tr>
        </thead>
        <tbody>
          {goals.map((goal, index) => (
            <tr key={index}>
              <td>{goal.date}</td>
              <td
              
              >{goal.dailyGoal}</td>
              <td>{goal.weeklyGoal}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* גרף להצגת נתוני היעדים */}
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={goals} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="dailyGoal" fill="#8884d8" name="יעד יומי" />
          <Bar dataKey="weeklyGoal" fill="#82ca9d" name="יעד שבועי" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GoalSummary;
