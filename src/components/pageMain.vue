<script>
import card from './card.vue'
import { store } from '../store'
export default {
    data() {
        return {
            store,
            welcomeMsg: true
        }
    },
    methods: {

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
        },
        isEmpty() {
            if (store.movies.length === 0 & store.series.length === 0 & store.query != '') {
                return true
            }
            else {
                return false
            }

        }
    }
}
</script>

<template>
    <main class="page-main">
        <div class="container">
            <div class="items">
                <h1 v-if="!store.query & store.movies.length === 0 & store.series.length === 0" class="welcomeMessage">
                    Benvenuto in Boolflix</h1>
                <div class="title" v-if="store.movies.length > 0">Film</div>
                <card class="col-3" v-for="movie in movies" :item="movie" :key="movie.id" />
                <div class="title" v-if="store.series.length > 0">Serie</div>
                <card class="col-3" v-for="serie in series" :item="serie" :key="serie.id" />
                <p class="errorMsg" v-if="isEmpty">Nessuna corrispondenza alla ricerca</p>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
@use '../style/partials/variable' as *;

.container {
    padding: 20px;
    overflow: auto;
    height: calc(100vh - 100px);

}

.page-main {
    background-color: $bg-main-color;
    position: relative;
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
    row-gap: 36px;
    column-gap: 36px;
    justify-content: space-evenly;
}

.errorMsg {
    font-size: 20px;
    padding-top: 40px
}

.welcomeMessage {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
