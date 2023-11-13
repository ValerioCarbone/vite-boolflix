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
                <div class="movies" v-if="store.movies">
                    <card class="col-6" v-for="movie in movies" :item="movie" />
                </div>
                <p v-else class="error-msg">Nessun film trovato</p>
            </div>
            <div class="col-6 card-container">
                <h2 class="card-title">Series</h2>
                <div class="series" v-if="store.series.length != 0">
                    <card v-for="serie in series" :item="serie" />
                </div>
                <p v-else class="error-msg">Nessuna serie trovata</p>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
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
}

.card-title {
    text-align: center;
    color: greenyellow;
    border-bottom: 1px solid rgb(164, 161, 161);
    ;
}

.movies,
.series {
    display: flex;
    color: white;
    flex-wrap: wrap;
    padding: 20px;
    height: 100%;
    row-gap: 10px;
}

.card-container {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    border: 1px solid rgb(164, 161, 161);
}
</style>
