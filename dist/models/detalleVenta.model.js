"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetalleVenta = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
const venta_model_1 = require("./venta.model");
const producto_model_1 = require("./producto.model");
exports.DetalleVenta = database_1.sequelize.define("DetalleVenta", {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    venta_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: { model: venta_model_1.Venta, key: "id" }
    },
    producto_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: { model: producto_model_1.Producto, key: "id" }
    },
    cantidad: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
    subtotal: { type: sequelize_1.DataTypes.DECIMAL(10, 2), allowNull: false }
});
exports.DetalleVenta.belongsTo(venta_model_1.Venta, { foreignKey: "venta_id" });
exports.DetalleVenta.belongsTo(producto_model_1.Producto, { foreignKey: "producto_id" });
venta_model_1.Venta.hasMany(exports.DetalleVenta, { foreignKey: "venta_id" });
producto_model_1.Producto.hasMany(exports.DetalleVenta, { foreignKey: "producto_id" });
