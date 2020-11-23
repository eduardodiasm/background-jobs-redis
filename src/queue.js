import 'dotenv/config'

import Queue from './app/lib/queue'
import registrationMail from './app/jobs/registrationMail'

Queue.process(registrationMail.handle)