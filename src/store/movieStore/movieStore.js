import state from './movieState'
import getters from './movieGetters'
import actions from './movieActions'
import mutations from './movieMutations'

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
