import { createStore } from 'vuex'


const store = createStore({
    state: {
        tasks: [
            {
                id: 1,
                name: '우유 사기',
                labelIds: [1, 2],
                done: false
            },
            {
                id: 2,
                name: 'Vue.js 관련 책 사기',
                labelIds: [1, 3],
                done: true
            }
        ],
        labels: [
            {
                id: 1,
                text: '쇼핑'
            },
            {
                id: 2,
                text: '음료'
            },
            {
                id: 3,
                text: '책'
            }
        ],
        nextTaskId: 3,
        nextLabelId: 4,
        filter: null
    },
    getters: {
        filteredTasks(state) {
            if (!state.filter) {
                return state.tasks
            }

            return state.tasks.filter(task => {
                return task.labelIds.indexOf(state.filter) >= 0
            })
        }
    },
    mutations: {
        addTask(state, { name, labelIds }) {
            state.tasks.push({
                id: state.nextTaskId,
                name,
                labelIds,
                done: false
            })
            state.nextTaskId++
        },
        toggleTaskStatus(state, { id }) {
            const filtered = state.tasks.filter(task => {
                return task.id === id
            })

            filtered.forEach(task => {
                task.done = !task.done
            })
        },
        addLabel(state, { text }) {
            state.labels.push({
                id: state.nextLabelId,
                text
            })

            state.nextLabelId++
        },
        changeFilter(state, { filter }) {
            state.filter = filter
        }
    }
})

export default store