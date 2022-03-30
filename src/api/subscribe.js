import {instance} from "./api";

export const subscribeAPI = {
  getSubscribe(email) {
    return instance.post('email', {
          'mail': email
        }
    )
  }
}