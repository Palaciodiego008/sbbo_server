
import express from 'express'
import { sequelize }  from './database/database.js'



const app = express()

//import { Client } from './models/clients.js'

const main = async () => {
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')    
        app.listen(3000)
        console.log('Server on port', 3000)
    } catch (error) {
        console.log(error)
    }
      

   
}

main()