import express from 'express'
import 'express-async-errors'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  return res.json({ message: 'Olá dev!' })
})

app.listen(3005, () => {
  console.log('listening on port 3005! 🍻')
})
