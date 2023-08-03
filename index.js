const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); // Importing the database connection function

require('dotenv').config({ path: './web.env' }); // Load environment variables

const app = express();
const port = process.env.PORT || 3000; // Use the PORT from environment variables

// Import your routes
const bookingRoutes = require('./server/controller/BookingController');
const userRoutes = require('./server/Route/userRoutes'); // Adjust as needed
const destinationRoutes = require('./server/Route/destinationRoutes'); // Adjust as needed

// Connect to the database using the function from config
connectDB();
app.use('/api/destinations', destinationRoutes);
app.use('/api/booking', bookingRoutes);
app.use('/api/users', userRoutes);

app.use(express.json()); // To handle JSON requests


app.get('/', (req, res) => {
  res.send('Welcome to my Travel Booking site!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
module.exports = app;
app.use(cors());