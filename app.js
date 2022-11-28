
import express from 'express'

import { Client } from 'pg'

const app = express()

const connectionData = {
    user: '',
    host: '',
    database: '',
    password: 'mysecretpassword',
    port: 5432,
  }

const client = new Client(connectionData)

client.connect()

app.get('/', (req, res) => {
    res.send('Hello World!')
})