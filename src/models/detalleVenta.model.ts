import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";
import { Venta } from "./venta.model";
import { Producto } from "./producto.model";

export const DetalleVenta = sequelize.define("DetalleVenta", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    venta_id: { 
        type: DataTypes.INTEGER, 
        allowNull: false,
        references: { model: Venta, key: "id" } 
    },
    producto_id: { 
        type: DataTypes.INTEGER, 
        allowNull: false,
        references: { model: Producto, key: "id" } 
    },
    cantidad: { type: DataTypes.INTEGER, allowNull: false },
    subtotal: { type: DataTypes.DECIMAL(10, 2), allowNull: false }
});


DetalleVenta.belongsTo(Venta, { foreignKey: "venta_id" });
DetalleVenta.belongsTo(Producto, { foreignKey: "producto_id" });

Venta.hasMany(DetalleVenta, { foreignKey: "venta_id" });
Producto.hasMany(DetalleVenta, { foreignKey: "producto_id" });
