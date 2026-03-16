import express from 'express';
import cors from 'cors';

import subjectsRouter from "./routes/subjects";

const app = express();
const PORT = 8000;

app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));

// Middleware
app.use(express.json());

app.use('/api/subjects', subjectsRouter)

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Classroom Backend API!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});  