import Room from '../models/Room.model.js';

export const createRoom = async (data) => {
    return await Room.create(data);
};

export const getAllRooms = async () => {
    return await Room.findAll();
};

export const getRoomById = async(id) => {
    return await Room.findByPk(id);
};

export const updateRoom = async(id, data) => {
    const room = await Room.findByPk(id);
    if (!room) return null;
    await room.update(data);
    return room;
};

export const deleteRoom = async(id) => {
    const room = await Room.findByPk(id);
    if (!room) return false;
    await room.destroy();
    return true;
};