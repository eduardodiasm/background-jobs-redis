import Queue from '../lib/queue'

export default {

  async store (req, res) {
    const { name, email, password } = req.body

    const user = {
      name, email, password
    }

    // Add mail registration into the queue.

    await Queue.add({ user })

    return res.json(user)

  }

}