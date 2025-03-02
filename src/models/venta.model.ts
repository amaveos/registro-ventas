import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

export const Venta = sequelize.define('Venta', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    fecha: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    total: { type: DataTypes.DECIMAL(10,2), allowNull: false }
});
