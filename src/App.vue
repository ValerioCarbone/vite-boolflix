<script>
import pageHeader from './components/pageHeader.vue'
import pageMain from './components/pageMain.vue'
import axios from 'axios'
import { store } from './store'

export default {
  components: {
    pageHeader,
    pageMain
  },
  data() {
    return {
      store
    }
  },
  methods: {
    fetchItems() {
      if (store.query != '') {
        axios
          .get('https://api.themoviedb.org/3/search/movie', {
            params: {
              api_key: store.api_key,
              query: store.query,
              language: 'it-IT'
            }
          }).then(res => {
            store.movies = res.data.results
          })
        axios
          .get(' https://api.themoviedb.org/3/search/tv', {
            params: {
              api_key: store.api_key,
              query: store.query,
              language: 'it_IT'
            }
          }).then(res => {
            store.series = res.data.results
          })

      }
    },
    isEmpty() {
      // if (store.movies.length === 0 & store.series.length === 0) {
      //   store.errorMsg === true
      // }
      // else if (store.movies.length != 0 & store.series.length != 0) {
      //   store.errorMsg === false
      // }
      console.log('ciao')
    }
  }
}
</script>

<template>
  <pageHeader @search="fetchItems" />
  <pageMain @search="isEmpty" />
</template>

<style lang="scss">
@use'./style/generals.scss';
</style>
