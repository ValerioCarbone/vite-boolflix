<script>
import { store } from '../store'
export default {
    data() {
        return {
            store,
            currentQuery: ''
        }
    },
    methods: {
        search() {
            store.query = this.currentQuery
            this.$emit('search')
        }
    }
    // updated() {
    //     store.query = this.currentQuery
    // }
}
</script>

<template>
    <header class="page-header">
        <div class="container">
            <h3 class="header-title">Boolflix</h3>
            <div>
                <input v-model="currentQuery" class="search-bar" type="search" placeholder="Cosa vuoi guardare?"
                    @keyup.enter="search">
                <button @click="search" class="btn">Cerca</button>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
@use '../style/partials/variable' as *;

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.btn {
    color: $main-color;
}

.page-header {
    width: 100%;
    background-color: black;
}

.container {
    padding: 20px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
}

.header-title {
    font-size: 30px;
    color: $main-color;
    text-transform: uppercase;

}

.search-bar {
    margin-right: 10px;
}
</style>
