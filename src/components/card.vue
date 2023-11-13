<script>
import { store } from '../store'
export default {
    data() {
        return {
            store
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
    <div class="col-6 card">
        <ul>
            <li v-if="item.original_title">{{ item.original_title }}</li>
            <li v-if="item.original_name">{{ item.original_name }}</li>
            <li v-if="item.title">{{ item.title }}</li>
            <li v-if="item.name">{{ item.name }}</li>
            <li><img :src="`https://image.tmdb.org/t/p/w185${item.poster_path}`"></li>
            <li> <font-awesome-icon icon="fa-solid fa-star" v-for="star in roundedVote" /></li>
            <li><img v-if="flags" class="flags" :src="flags">
                <p v-else>{{ item.original_language }}</p>
            </li>
        </ul>
    </div>
</template>
<style scoped lang="scss">
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
</style>