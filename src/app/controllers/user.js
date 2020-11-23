import mail from '../lib/mail'

export default {

  async store (req, res) {
    const { name, email, password } = req.body

    const user = {
      name, email, password
    }

    mail.sendMail({
      from: 'background job test <backgroundjob@test.com.br>',
      to: `${name} <${email}>`,
      subject: 'User registration',
      html: `Hi, ${name}! Welcome to the background jobs of my server :)`
    })

    return res.json(user)

  }

}