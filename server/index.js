const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();  
const authRoutes = require('./routes/auth');


const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// Basic route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Authentication routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});
