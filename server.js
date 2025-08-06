import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import routes from './app/routes/index.js';
import { testConnection } from './app/config/db.js';
import { syncDatabase } from './app/models/index.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Base route
app.get('/', (req, res) => {
  res.json({ message: '🏠 Welcome to Boarding House Management API' });
});

// Mount routes
app.use('/api', routes);

async function main() {
  try {
    await testConnection();
    await syncDatabase();
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Unable to start server:', error);
    process.exit(1);
  }
}

main();