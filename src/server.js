import express from 'express'
import userController from './app/controllers/user'

const app = express()
const PORT = process.env.PORT || 3333

app.use(express.json())

app.post('/users', userController.store)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
