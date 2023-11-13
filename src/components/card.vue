<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>
<template>
    <ul class="col-6">
        <li v-if="item.original_title">{{ item.original_title }}</li>
        <li v-if="item.original_name">{{ item.original_name }}></li>
        <li v-if="item.title">{{ item.title }}</li>
        <li v-if="item.name">{{ item.name }}</li>
        <li>{{ item.original_language }}</li>
        <li>{{ item.vote_average }}</li>
    </ul>
</template>
<style scoped lang="scss">
ul,
ol,
menu {
    list-style: none;
}

.col-6 {
    flex-basis: 50%;
}
</style>