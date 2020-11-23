import mail from '../lib/mail'

export default {
  key: 'registrationMail',

  async handle ({ data }) {

    const { user } = data

    await mail.sendMail({
      from: 'background job test <backgroundjob@test.com.br>',
      to: `${user.name} <${user.email}>`,
      subject: 'User registration',
      html: `Hi, ${user.name}! Welcome to the background jobs of my server :)`
    })
  }
  
}