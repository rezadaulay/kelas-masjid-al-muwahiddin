import axios from 'axios';
import { environment } from '../environment'

type message = {
    phone: string,
    content: string
}

export function sendWhatsappNotification({
    phone,
    content
}: message): void {
  const env = environment();
  axios.post(env.WA_ENDPOINT, {
    phone_number: phone,
    message: content,
  }).then(function (response) {
    // console.log(response);
  }).catch(function (error) {
    console.log(error);
  });    
}