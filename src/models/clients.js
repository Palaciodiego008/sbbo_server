import { sequelize } from "../database/database";
import Sequelize from "sequelize";


export const Client = sequelize.define('clients',{
    id: {
        type: Sequelize.DataTypes.UUIDV4,
        primaryKey: true,
    },
    firstName : {
        type: Sequelize.DataTypes.STRING,
    },
    lastName : {
        type: Sequelize.DataTypes.STRING,
    },
    email : {
        type: Sequelize.DataTypes.STRING,
    },
})

