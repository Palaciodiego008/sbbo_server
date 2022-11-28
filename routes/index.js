import app from '../app.js'

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' })
})

app.listen(3000, () => {{console.log('Server is running on port 3000')}})