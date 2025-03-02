"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
exports.Producto = database_1.sequelize.define('Producto', {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    precio: { type: sequelize_1.DataTypes.DECIMAL(10, 2), allowNull: false },
    stock: { type: sequelize_1.DataTypes.INTEGER, allowNull: false }
});
