import { sequelize } from "../database/database.js";
import Sequelize from "sequelize";


export const Client = sequelize.define('clients',{
    id: {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true,
    },
    first_name : {
        type: Sequelize.DataTypes.STRING,
    },
    last_name : {
        type: Sequelize.DataTypes.STRING,
    },
    email : {
        type: Sequelize.DataTypes.STRING,
    },
    phone : {
        type: Sequelize.DataTypes.STRING,
    },
})

