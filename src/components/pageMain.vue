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
            <div class="items">
                <div class="title">Movies</div>
                <card class="col-3" v-for="movie in movies" :item="movie" :key="movie.id" />
                <div class="title">Series</div>
                <card class="col-3" v-for="serie in series" :item="serie" :key="serie.id" />
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
.page-main {
    background-color: black;
}

.error-msg {
    color: white;
    text-align: center;
    padding: 20px 0;
}

.container {
    background-color: rgb(41, 40, 40);

}

.col-3 {
    flex-basis: calc(100% / 4);
    flex-grow: 1;
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
    height: 100%;
    row-gap: 36px;
}
</style>
