const BASE_URL = "http://localhost:5000"; // כתובת השרת שלך

export const sendDailyGoal = async (dailyGoal: number, date: string) => {
  try {
    const response = await fetch(`${BASE_URL}/api/daily-goals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ dailyGoal, date }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to send daily goal:", error);
    throw error;
  }
};

export const sendWeeklyGoal = async (weeklyGoal: number, date: string) => {
  try {
    const response = await fetch(`${BASE_URL}/api/weekly-goals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ weeklyGoal, date }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to send weekly goal:", error);
    throw error;
  }
};
