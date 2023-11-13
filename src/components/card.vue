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
        show() {
            this.showPoster == false
        },
        hide() {
            this.showPoster == true
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
    <div class="col-6">
        <img v-if="showPoster === true" class="card-poster" @mouseover="show()" @mouseout="hide()"
            :src="`https://image.tmdb.org/t/p/w342${item.poster_path}`">
        <div v-else>
            <ul class="card-info">
                <li v-if="item.original_title">{{ item.original_title }}</li>
                <li v-if="item.original_name">{{ item.original_name }}</li>
                <li v-if="item.title">{{ item.title }}</li>
                <li v-if="item.name">{{ item.name }}</li>
                <li> <font-awesome-icon icon="fa-solid fa-star" v-for=" star  in  roundedVote " /></li>
                <li><img v-if="flags" class="flags" :src="flags">
                    <p v-else>{{ item.original_language }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<!-- 
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
</ul> -->

<style scoped lang="scss">
.hidden {
    display: none;
}

.card-poster {
    height: 454px;
    width: 300px;
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
    border: 1px solid rgb(222, 220, 220);
}

.card-info {
    background-color: black;
}
</style>