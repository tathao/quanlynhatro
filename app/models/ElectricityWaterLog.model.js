import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import Room from './Room.model.js';

const ElectricityWaterLog = sequelize.define('ElectricityWaterLog', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    room_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Room,
            key: 'id',
        },
        onDelete: 'CASCADE',
    },
    month: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    old_electric: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    new_electric: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    old_water: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    new_water: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    tableName: 'electricity_water_logs',
    timestamps: false,
    indexes: [
        {
            unique: true,
            fields: ['room_id', 'month'],
        }
    ],
});

export default ElectricityWaterLog;
