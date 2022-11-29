
import express from 'express'
import { sequelize }  from './database/database.js'



const app = express()

import './models/clients.js'
import './models/services.js'

const main = async () => {
    try {
        await sequelize.sync({force: true})
        console.log('Connection has been established successfully.')    
        app.listen(3000)
        console.log('Server on port', 3000)
    } catch (error) {
        console.log(error)
    }
      

   
}

main()