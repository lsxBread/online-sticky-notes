import axios from 'axios'
import { message } from 'antd'
let ref = null
axios.interceptors.request.use(config => {
  ref = message.loading('Action in progress..', 0);
  return config
})

axios.interceptors.response.use(config => {
  setTimeout(ref, 1)
  return config
})  