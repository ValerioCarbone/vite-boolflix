<script>
import pageFooter from './components/pageFooter.vue'
import pageMain from './components/main.vue'
import axios from 'axios'
import { store } from './store'

export default {
  components: {
    pageFooter,
    pageMain
  },
  data() {
    return {
      API_KEY: store.api_key,
      currentQuery: store.query
    }
  },
  methods: {
    fetchItems() {
      axios
        .get('https://api.themoviedb.org/3/search/movie', {
          params: {
            api_key: this.API_KEY,
            query: this.currentQuery
          }
        }).then(res => {
          store.searchedItems = res.data.results
          console.log(store.query, store.searchedItems)
        })
    }
  }
}
</script>

<template>
  <pageFooter @search="fetchItems" />
  <pageMain />
</template>

<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
