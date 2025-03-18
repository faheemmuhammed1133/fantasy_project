import express from 'express';
import connectDB from './dbconnection.js';
import cors from 'cors';

// Import Routes
import userRoutes from './routes/userRoutes.js';
import matchRoutes from './routes/matchRoutes.js';
import teamRoutes from './routes/teamRoutes.js';
import contestRoutes from './routes/contestRoutes.js';
import playerRoutes from './routes/playerRoutes.js';
import myMatchRoutes from './routes/mymatchRoutes.js';


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();


// REST Routes
app.use('/api/users', userRoutes);
app.use('/api/matches', matchRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/contests', contestRoutes);
app.use('/api/players', playerRoutes);
app.use('/api/mymatches', myMatchRoutes);

// Health Check Endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the dream11clone');
});

// Start the Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
