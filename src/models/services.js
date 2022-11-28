import { sequelize } from "../database/database";


sequelize.define('services',{
    id: {
        type: sequelize.DataTypes.UUIDV4,
    },
    name : {
        type: sequelize.DataTypes.STRING, 
    },
    description : {
        type: sequelize.DataTypes.STRING,
    },
})