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
                <card class="col-3" v-for="movie in movies" :item="movie" />
                <card class="col-3" v-for="serie in series" :item="serie" />
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

.card-title {
    text-align: center;
    color: white;

}

.items {
    display: flex;
    color: white;
    flex-wrap: wrap;
    padding: 36px 0;
    height: 100%;
    row-gap: 36px;
}

.card-container {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
}
</style>
