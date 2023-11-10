<script>
import pageFooter from './components/pageFooter.vue'
import pageMain from './components/pageMain.vue'
import axios from 'axios'
import { store } from './store'

export default {
  components: {
    pageFooter,
    pageMain
  },
  data() {
    return {
    }
  },
  methods: {
    fetchItems() {
      axios
        .get('https://api.themoviedb.org/3/search/movie', {
          params: {
            api_key: store.api_key,
            query: store.query
          }
        }).then(res => {
          store.searchedItems = res.data.results
        })
    }
  }
}
</script>

<template>
  <pageFooter @search="fetchItems" />
  <pageMain />
</template>

<style scoped lang="scss"></style>
