import 'dotenv/config'
import express from 'express'
import bullBoard from 'bull-board'
import queue from './app/lib/queue'
import userController from './app/controllers/user'

const app = express()
const PORT = process.env.PORT || 3333
bullBoard.setQueues(queue.queues.map(queue => queue.bull))

app.use(express.json())
app.use('/admin/queues', bullBoard.UI)

app.post('/users', userController.store)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
