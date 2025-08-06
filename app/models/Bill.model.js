import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import Room from './Room.model.js';

const Bill = sequelize.define('Bill', {
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
    electricity_usage: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    water_usage: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    electricity_cost: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
    },
    water_cost: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
    },
    room_rent: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
    },
    trash_fee: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
    },
    total_amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
    },
    is_paid: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    paid_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    tableName: 'bills',
    timestamps: false,
    indexes: [
        {
            unique: true,
            fields: ['room_id', 'month'],
        }
    ]
});

export default Bill;
