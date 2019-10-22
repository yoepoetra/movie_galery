export default {
  fetchMovie(state) {
    state.isfetching = true
    state.message = null
  },
  fetchMovieSuccess(state, { data }) {
    state.isfetching = false
    state.message = null
    state.data = data
  },
  fetchMovieError(state, error) {
    state.isfetching = false
    state.message = error
  }
}
