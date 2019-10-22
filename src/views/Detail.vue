<template>
  <div class="detail">
    <div class="columns">
      <div class="column">
        <img>
        <p>Judul : {{ movie.Title }}</p>
        <p>Rate</p>
        <p>Tahun</p>
      </div>
      <div class="column">
        <p>Sinopsis</p>
        <p>Pemain</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Detail',
  data() {
    return {
      movie: {}
    }
  },
  computed: {
    ...mapGetters({
      isfetching: 'movieStore/isfetching',
      data: 'movieStore/data'
    })
  },
  mounted() {
    const params = {
      type: 'title',
      value: 'die+hard'
    }
    this.fetch(params)
  },
  methods: {
    ...mapActions({
      getMovie: 'movieStore/getMovie'
    }),
    async fetch(params) {
      await this.getMovie(params)
      this.movie = this.data
      console.log(this.movie)
    }
  }
}
</script>
