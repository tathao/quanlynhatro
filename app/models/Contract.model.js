import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import Tenant from './Tenant.model.js';
import Room from './Room.model.js';

const Contract = sequelize.define('Contract', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    tenant_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Tenant,
            key: 'id',
        },
        onDelete: 'CASCADE',
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
    start_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    end_date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
    deposit_amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
    },
    trash_fee: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
    },
    electricity_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
    },
    water_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
    },
}, {
    tableName: 'contracts',
    timestamps: false,
});

export default Contract;
