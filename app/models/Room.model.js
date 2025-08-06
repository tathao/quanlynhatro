import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Room = sequelize.define('Room', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    room_number: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    area: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING(20),
        defaultValue: 'available',
    }
}, {
    tableName: 'rooms',
    timestamps: false,
});

export default Room;