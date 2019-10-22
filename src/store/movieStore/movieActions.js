import { movieServices } from '@/services'

export default {
  async getMovie({ commit }, params = {}) {
    commit('fetchMovie')
    try {
      const data = await movieServices.get(params)
      commit('fetchMovieSuccess', data)

      return data
    } catch (error) {
      commit('fetchMovieError', error)

      console.log(error)
      return error
    }
  }
}
