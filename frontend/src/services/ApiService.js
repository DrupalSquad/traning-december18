import axios from 'axios'
import { get } from 'lodash'

class ApiService {
  constructor() {
    this.originalRequest = null

    this.baseURL = get(process.env, 'API_BASE_URL', 'http://drupal8.docker.local:8000')

    this.axios = axios.create({
      baseURL: this.baseURL
    })
  }

  getNodes = () => {
    return this.axios.get('node?_format=json')
  }

  getNode = (nid) => {
    return this.axios.get(`node/${nid}?_format=json`)
  }

  getLoginStatus = () => {
    return this.axios.get('user/login_status?_format=json')
  }

  userRegister = (data) => {
    return this.axios.post('user/register?_format=json', data)
  }

  userLogin = (data) => {
    return this.axios.post('user/login?_format=json', data)
  }
}

const instance = new ApiService()

export default instance
