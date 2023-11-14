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
            let a = this.item.vote_average
            a = a / 2
            return Math.ceil(a)
        }
    }
}
</script>
<template>
    <div>
        <div class="card-container">
            <img v-if="item.poster_path" class="card-poster" :src="`https://image.tmdb.org/t/p/w342${item.poster_path}`">
            <ul class="card-info">
                <li>
                    <span class="card-title">Titolo originale: </span>
                    {{ item.original_title ? item.original_title :
                        item.original_name }}
                </li>
                <li>
                    <span class="card-title">Titolo: </span>
                    {{ item.title ? item.title : item.name }}
                </li>
                <li>
                    <span class="card-title">Trama: </span>
                    {{ item.overview }}
                </li>
                <li>
                    <span class="card-title">Voto: </span>

                    <font-awesome-icon :icon="['fas', 'star']" v-for=" star  in  roundedVote " :key="star" class="yellow" />

                    <font-awesome-icon :icon="['far', 'star']" v-for="star in 5 - roundedVote " :key="star"
                        class="yellow" />
                </li>
                <li><span class="card-title">Lingua</span><img v-if="flags" class="flags" :src="flags">
                    <p v-else>{{ item.original_language }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/variable' as *;

.card-title {
    font-weight: 700;
    font-size: 14px;
    color: $main-color;
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
    text-align: center;

    img {
        margin: 0 auto;
    }
}

.flags {
    width: 30px;
}

.card-poster {
    position: absolute;

    &:hover {
        filter: opacity(0);
    }
}

.card-info {
    background-color: black;
    padding: 15px 10px;
    font-size: 12px;
}

.card-container {
    border: 1px solid rgb(222, 220, 220);
    height: 454px;
    width: 300px;
    position: relative;
    background-color: black;
}
</style>