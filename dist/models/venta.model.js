"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Venta = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
exports.Venta = database_1.sequelize.define('Venta', {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    fecha: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
    total: { type: sequelize_1.DataTypes.DECIMAL(10, 2), allowNull: false }
});
