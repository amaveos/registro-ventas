"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const database_1 = require("./config/database");
require("./models/producto.model");
require("./models/venta.model");
require("./models/detalleVenta.model");
const producto_routes_1 = require("./routes/producto.routes");
const venta_routes_1 = require("./routes/venta.routes");
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/api", producto_routes_1.default);
app.use("/api", venta_routes_1.default);
const PORT = process.env.PORT || 3000;
database_1.sequelize.sync({ force: true }).then(() => {
    console.log("✅ Tablas creadas en la base de datos");
    app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, database_1.conectarDB)();
        console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    }));
}).catch(error => {
    console.error("❌ Error al sincronizar las tablas:", error);
});
