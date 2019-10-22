export default class BaseServices {
  constructor(axios) {
    this.http = axios
  }

  getData(url) {
    try {
      return this.http.request({
        method: 'get',
        url
      })
    } catch (error) {
      return error
    }
  }
}
