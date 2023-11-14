<script>
import { store } from '../store'
export default {
    data() {
        return {
            store,
            showPoster: true
        }
    },
    methods: {
        hide() {
            return 'hidden'
        },
        compareTitle() {
            this.item.original_title.trim != this.item.title.trim
        }
    },
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    computed: {
        flags() {
            return this.store.flags[this.item.original_language]
        },
        roundedVote() {
            return Math.ceil(this.item.vote_average / 2)
        }
    }
}
</script>
<template>
    <div class="card-container">
        <img v-if="item.poster_path" class="card-poster" :src="`https://image.tmdb.org/t/p/w342${item.poster_path}`">
        <ul class="card-info">
            <li v-if="item.original_title != item.title || item.original_name != item.name">
                <span class="card-title">Titolo originale: </span>
                {{ item.original_title ? item.original_title :
                    item.original_name }}
            </li>
            <li>
                <span class="card-title">Titolo: </span>
                {{ item.title ? item.title : item.name }}
            </li>
            <li v-if="item.overview">
                <span class="card-title">Trama: </span>
                {{ item.overview }}
            </li>
            <li>
                <span class="card-title">Voto: </span>

                <font-awesome-icon :icon="['fas', 'star']" v-for=" star  in  roundedVote " :key="star" class="yellow" />

                <font-awesome-icon :icon="['far', 'star']" v-for="star in 5 - roundedVote " :key="star" class="yellow" />
            </li>
            <li class="vote"><span class="card-title">Lingua </span><img v-if="flags" class="flags" :src="flags">
                <p v-else>{{ item.original_language }}</p>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/variable' as *;

.card-title {
    font-weight: 700;
    font-size: 14px;
    color: $main-color;
    margin-right: 4px;
}

.yellow {
    color: rgb(231, 197, 7);
}

img {
    display: block;
    width: 100%;
    height: 100%;
}


ul,
ol,
li,
menu {
    list-style: none;
}

li {
    margin: 6px 0;
    text-align: left;
    font-size: 12px;

    img {
        display: inline-block;
        margin-left: 6px;
    }
}

.flags {
    width: 30px;
}

.card-poster {
    position: absolute;
    border-radius: 15px;

    &:hover {
        filter: opacity(0);
    }
}

.card-info {
    background-color: black;
    padding: 15px 10px;
    font-size: 12px;
    border-radius: 15px;
    overflow: auto;
}

.card-container {
    height: 454px;
    width: 300px;
    position: relative;
    background-color: black;
    border-radius: 15px;
    overflow: hidden;
}

.vote {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
</style>