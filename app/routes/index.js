import express from 'express';
import roomRoutes from './room.routes.js';

const router = express.Router();
router.use('/rooms', roomRoutes);

export default router;