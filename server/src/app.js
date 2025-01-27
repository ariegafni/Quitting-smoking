require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // ייבוא CORS
const goalRoutes = require('./routes/goalRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// הפעלת CORS לכל הדומיינים
app.use(cors());

// חיבור ל-MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

// Middleware
app.use(bodyParser.json());

app.use('/api', goalRoutes);

// האזנה לשרת
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
