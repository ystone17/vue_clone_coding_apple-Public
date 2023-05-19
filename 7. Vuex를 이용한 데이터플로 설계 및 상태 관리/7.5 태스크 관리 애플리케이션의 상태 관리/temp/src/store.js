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
        ],
        nextTaskId: 3,
    },
    mutations: {
        addTask(state, {
            name
        }) {
            state.tasks.push({
                id: state.nextTaskId,
                name,
                done: false
            })
        },
        toggleTaskStatus(state, {
            id
        }) {
            const filtered = state.tasks.filter(task => {
                return task.id === id
            })

            filtered.forEach(task => {
                task.done = !task.done
            })
        }
    }
})

export default store