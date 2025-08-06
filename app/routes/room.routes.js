import express from 'express';
import * as roomController from '../controllers/room.controller.js';

const roomRoutes = express.Router();

roomRoutes.post('/', roomController.createRoom);
roomRoutes.get('/', roomController.getAllRooms);
roomRoutes.get('/:id', roomController.getRoomById);
roomRoutes.put('/:id', roomController.updateRoom);
roomRoutes.delete('/:id', roomController.deleteRoom);

export default roomRoutes;
