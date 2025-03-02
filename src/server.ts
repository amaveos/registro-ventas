import * as express from "express";
import * as cors from "cors";
import * as dotenv from "dotenv";
import { conectarDB, sequelize } from "./config/database";
import "./models/producto.model";
import "./models/venta.model";
import "./models/detalleVenta.model";
import productoRoutes from "./routes/producto.routes";
import ventaRoutes from "./routes/venta.routes"; 

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));


app.use("/api", productoRoutes);
app.use("/api", ventaRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: true }).then(() => {
  console.log("✅ Tablas creadas en la base de datos");

  app.listen(PORT, async () => {
    await conectarDB();
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  });
}).catch(error => {
  console.error("❌ Error al sincronizar las tablas:", error);
});