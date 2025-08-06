import Room from './Room.model.js';
import Tenant from './Tenant.model.js';
import Bill from './Bill.model.js';
import ElectricityWaterLog from './ElectricityWaterLog.model.js';
import Contract from './Contract.model.js';
import Notification from './Notification.model.js';
import sequelize from '../config/db.js';

Room.hasMany(Tenant, {
    foreignKey: 'room_id',
    onDelete: 'SET NULL',
});
Tenant.belongsTo(Room, {
    foreignKey: 'room_id',
});

Tenant.hasMany(Contract, {
    foreignKey: 'tenant_id',
    onDelete: 'CASCADE',
});
Contract.belongsTo(Tenant, {
    foreignKey: 'tenant_id',
});

Room.hasMany(Contract, {
    foreignKey: 'room_id',
    onDelete: 'CASCADE',
});
Contract.belongsTo(Room, {
    foreignKey: 'room_id',
});

Room.hasMany(ElectricityWaterLog, {
    foreignKey: 'room_id',
    onDelete: 'CASCADE',
});
ElectricityWaterLog.belongsTo(Room, {
    foreignKey: 'room_id',
});

Room.hasMany(Bill, {
    foreignKey: 'room_id',
    onDelete: 'CASCADE',
});
Bill.belongsTo(Room, {
    foreignKey: 'room_id',
});

Tenant.hasMany(Notification, {
  foreignKey: 'tenant_id',
  onDelete: 'CASCADE',
});
Notification.belongsTo(Tenant, {
  foreignKey: 'tenant_id',
});

// Sync database
const syncDatabase = async () => {
    try {
        await sequelize.sync({ alter: true });
        console.log('✅ All models were synchronized successfully.');
    } catch (error) {
        console.error('❌ Failed to sync models:', error);
    }
};

export {
    sequelize,
    syncDatabase,
    Room,
    Tenant,
    Contract,
    ElectricityWaterLog,
    Bill,
    Notification
};