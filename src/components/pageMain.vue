<script>
import card from './card.vue'
import { store } from '../store'
export default {
    data() {
        return {
            store
        }
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
            <div class="col-6 card-container">
                <h2 class="card-title">Movies</h2>
                <div class="movies">
                    <card class="col-6" v-for="movie in movies" :item="movie" />
                    <p v-if="!store.movies.length" class="error-msg">Nessun film trovato</p>
                </div>

            </div>
            <div class="col-6 card-container">
                <h2 class="card-title">Series</h2>
                <div class="series">
                    <card v-for="serie in series" :item="serie" />
                    <p v-if="!store.series.length" class="error-msg">Nessuna serie trovata</p>
                </div>

            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
.page-main {
    background-color: black;
    padding-bottom: 40px;
}

.error-msg {
    color: white;
    text-align: center;
    padding: 20px 0;
}

.container {
    background-color: rgb(41, 40, 40);
    display: flex;

}

.col-6 {
    flex-basis: calc(100% / 2);
    flex-grow: 1;
}

.card-title {
    text-align: center;
    color: white;

}

.movies,
.series {
    display: flex;
    color: white;
    flex-wrap: wrap;
    padding: 20px;
    height: 100%;
    row-gap: 10px;
    justify-content: center;
}

.card-container {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
}
</style>
