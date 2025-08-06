import * as roomService from '../services/room.service.js';

export const createRoom = async (req, res) => {
    try {
        const room = await roomService.createRoom(req.body);
        res.status(201).json(room);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getAllRooms = async (req, res) => {
    try {
        const rooms = await roomService.getAllRooms();
        res.json(rooms);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getRoomById = async (req, res) => {
    try {
        const room = await roomService.getRoomById(req.params.id);
        if (!room) return res.status(404).json({ message: 'Room not found' });
        res.json(room);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const updateRoom = async (req, res) => {
    try {
        const updatedRoom = await roomService.updateRoom(req.params.id, req.body);
        if (!updatedRoom) return res.status(404).json({ message: 'Room not found' });
        res.json(updatedRoom);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const deleteRoom = async (req, res) => {
    try {
        const success = await roomService.deleteRoom(req.params.id);
        if (!success) return res.status(404).json({ message: 'Room not found' });
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};