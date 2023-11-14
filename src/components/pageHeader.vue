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
}
</script>

<template>
    <header class="page-header">
        <div class="container">
            <a href="http://localhost:5173">
                <h3 class="header-title">Boolflix</h3>
            </a>
            <div>
                <input v-model.trim="currentQuery" class="search-bar" type="search" placeholder="Cosa vuoi guardare?"
                    @keyup.enter="search">
                <button @click="search" class="btn">Cerca</button>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
@use '../style/partials/variable' as *;

a {
    text-decoration: none;

}


.page-header {
    background-color: black;
    height: 100px;
}

.container {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    height: 100%;
}

.header-title {
    font-size: 30px;
    color: $main-color;
    text-transform: uppercase;

}

.btn {
    color: $main-color;
    height: 26px;
    padding: 0 10px;
    border-radius: 20px 20px;
    border: none;

}

.search-bar {
    margin-right: 10px;
    height: 26px;
    border-radius: 15px;
    padding: 0 8px;
    background-color: white;
    font-size: 12px;
}
</style>
