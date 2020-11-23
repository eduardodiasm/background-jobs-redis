import mail from '../lib/mail'

export default {
  key: 'registrationMail',

  async handle (data) {
    await mail.sendMail({
      from: 'background job test <backgroundjob@test.com.br>',
      to: `${data.name} <${data.email}>`,
      subject: 'User registration',
      html: `Hi, ${data.name}! Welcome to the background jobs of my server :)`
    })
  }
  
}