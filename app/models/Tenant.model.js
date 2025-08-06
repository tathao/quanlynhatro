import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import Room from './Room.model.js';

const Tenant = sequelize.define('Tenant', {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    full_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    identity_card: {
        type: DataTypes.STRING(20),
        unique: true,
        allowNull: true,
    },
    phone: {
        type: DataTypes.STRING(15),
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    room_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Room,
            key: 'id',
        },
        onDelete: 'SET NULL',
        allowNull: true,
    },

}, {
    tableName: 'tenants',
    timestamps: false,
});

export default Tenant;