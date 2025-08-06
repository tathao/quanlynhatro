import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const PricingSetting = sequelize.define('PricingSetting', {
    key: {
        type: DataTypes.STRING(100),
        primaryKey: true,
    },
    value: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    unit: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
}, {
    tableName: 'pricing_settings',
    timestamps: false,
});

export default PricingSetting;
