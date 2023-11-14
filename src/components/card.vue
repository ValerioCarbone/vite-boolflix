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
            let a = Math.ceil(this.item.vote_average)
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
                <li>{{ item.original_title ? item.original_title : item.original_name }}</li>
                <li>{{ item.title ? item.title : item.name }}</li>
                <li>
                    <font-awesome-icon :icon="['fas', 'star']" v-for=" star  in  roundedVote " :key="star" />
                    <font-awesome-icon :icon="['far', 'star']" v-for="star in 5 - roundedVote " :key="star" />
                </li>
                <li><img v-if="flags" class="flags" :src="flags">
                    <p v-else>{{ item.original_language }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss">
img {
    display: block;
    width: 100%;
    height: 100%;
}


ul,
ol,
menu {
    list-style: none;
}

.col-6 {
    flex-basis: 50%;
    text-align: center;
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
}

.card-container {
    border: 1px solid rgb(222, 220, 220);
    height: 454px;
    width: 300px;
    position: relative;
    background-color: black;
}
</style>