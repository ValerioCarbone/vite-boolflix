import { reactive } from 'vue';

export const store = reactive({
    query: '',
    api_key: 'd021e16f851784e15516eb400859f5a3',
    movies: [],
    series: [],
    flags: {
        it: '/it.png',
        de: '/ge.png',
        ja: '/ja.png',
        en: '/en.png',
        es: '/es.png',
        fr: '/fr.png'
    },
    errorMsg: false
})