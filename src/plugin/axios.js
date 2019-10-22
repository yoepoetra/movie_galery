import axios from 'axios'

const baseKEY = process.env.VUE_APP_API_KEY
const baseURL = `${process.env.VUE_APP_API_URL}?apikey=${baseKEY}`

const option = {
  baseURL,
  header: {}
}

const instance = axios.create(option)

export default instance
