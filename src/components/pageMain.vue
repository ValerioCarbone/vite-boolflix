<script>
import card from './card.vue'
import { store } from '../store'
export default {
    data() {
        return {
            store
        }
    },
    methods: {
        // isEmpty() {
        //     if (store.movies.length === 0 & store.series.length === 0) {
        //         store.errorMsg === true
        //     }
        //     else {
        //         store.errorMsg === false
        //     }
        // }
    },
    components: {
        card
    },
    computed: {
        movies() {
            return this.store.movies
        },
        series() {
            return this.store.series
        }
    }
}
</script>

<template>
    <main class="page-main">
        <div class="container">
            <div class="items">
                <div class="title" v-if="store.movies.length > 0">Film</div>
                <card class="col-3" v-for="movie in movies" :item="movie" :key="movie.id" />
                <div class="title" v-if="store.series.length > 0">Serie</div>
                <card class="col-3" v-for="serie in series" :item="serie" :key="serie.id" />
                <p v-if="store.errorMsg">Nessuna corrispondenza alla ricerca</p>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
@use '../style/partials/variable' as *;

.container {
    max-width: 1700px;
    margin: 0 auto;
    overflow: auto;
    height: calc(100vh - 80px);

}

.page-main {
    background-color: $bg-main-color;
    overflow: hidden;
}

.title {
    text-align: center;
    flex-basis: 100%;
    font-size: 24px;
    line-height: 26px;
    font-weight: 700;

}

.items {
    display: flex;
    color: white;
    flex-wrap: wrap;
    padding: 36px 0;
    row-gap: 36px;
    column-gap: 20px;
    justify-content: space-evenly;
}
</style>
