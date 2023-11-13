<script>
import pageHeader from './components/pageHeader.vue'
import pageMain from './components/pageMain.vue'
import axios from 'axios'
import { store } from './store'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'

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
    }
  }
}
</script>

<template>
  <pageHeader @search="fetchItems" />
  <pageMain />
</template>

<style lang="scss">
@use'./style/generals.scss';
</style>
