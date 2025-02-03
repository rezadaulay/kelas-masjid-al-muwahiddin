import Queue from 'bee-queue';
import { environment } from '../environment';
import { sendWhatsappNotification } from './whatsapp'

const env = environment();
const options = {
    // delayedDebounce: 5000,
    // activateDelayedJobs: true,
    removeOnSuccess: true,
    redis: {
        host: env.REDIS_HOST,
        port: env.REDIS_PORT,
        password: env.REDIS_PASS,
    },
}

type message = {
    phone: string,
    content: string
}

const whatsappQueue = new Queue('whatsapp', options);

const sendMessage = async (message: message) => {
  new Promise(async (resolve, reject) => {
    try {
      const job = await whatsappQueue.createJob(message).save();
      job.on('succeeded', (result: any) => {
        console.log(`Received result for job ${job.id}: ${result}`);
      });
      resolve(job);
    } catch (error) {
      reject(error);
    }
  });
};

// Process jobs from as many servers or processes as you like
whatsappQueue.process(function (job: any, done: any) {
  console.log(`Processing job ${job.id}`);
  sendWhatsappNotification({
    phone: job.data.phone,
    content: job.data.content
  });
  done();
});

export { sendMessage };