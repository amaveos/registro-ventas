import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(
    process.env.DB_NAME || 'tienda_db',
    process.env.DB_USER || 'root',
    process.env.DB_PASS || '',
    {
        host: process.env.DB_HOST || 'localhost',
        port: Number(process.env.DB_PORT) || 3306, 
        dialect: process.env.DB_DIALECT as any,
        logging: false
    }
);

export const conectarDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('📦 Conexión a la base de datos establecida');
    } catch (error) {
        console.error('❌ Error al conectar la base de datos:', error);
    }
};