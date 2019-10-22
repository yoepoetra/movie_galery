import axios from 'axios'

export default class MovieServices {
  constructor(baseServices) {
    this.baseServices = baseServices
  }

  async get(params) {
    try {
      let url = ''
      if (params.type === 'title') {
        url = `&t=${params.value}`
      } else if (params.type === 'id') {
        url = `&i=${params.value}`
      }
      // const response = await this.baseServices.getData(url)
      const baseKEY = process.env.VUE_APP_API_KEY
      const baseURL = `${process.env.VUE_APP_API_URL}?apikey=${baseKEY}${url}`

      const option = {
        baseURL,
        header: {}
      }
      const instance = axios.create(option)
      this.baseServices = instance
      const response = await this.baseServices.request({
        method: 'get'
      })

      return response
    } catch (error) {
      return error
    }
  }
}
