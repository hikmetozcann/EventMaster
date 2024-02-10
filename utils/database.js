// utils/database.js

import { configDotenv } from 'dotenv';
import { Sequelize } from 'sequelize';
import process from 'process'; // Import the 'process' module
configDotenv();
const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',
    operationsAliases: false,
    define: {
        freezeTableName: true,
    }
});

export default sequelize;
