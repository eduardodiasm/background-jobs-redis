import Queue from 'bull'
import redisConfig from '../../config/redis'

import registrationMail from '../jobs/registrationMail'

const mailQueue = new Queue(registrationMail.key, redisConfig)

mailQueue.on('failed', (job, error) => {
  console.log('Job failed', job.name, job.data)
  console.log(error)
})

export default mailQueue