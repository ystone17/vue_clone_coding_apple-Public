import { createStore } from 'vuex'


const store = createStore({
    state: {
        tasks: [
            {
                id: 1,
                name: '우유 사기',
                done: false
            },
            {
                id: 2,
                name: 'Vue.js 관련 책 사기',
                done: true
            }
        ]
    }
})

export default store