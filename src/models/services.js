import { sequelize } from "../database/database.js";
import Sequelize from "sequelize";


export const Services =  sequelize.define('services',{
    id: {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true,
    },
    name : {
        type: Sequelize.DataTypes.STRING, 
    },
    description : {
        type: Sequelize.DataTypes.STRING,
    },

})
