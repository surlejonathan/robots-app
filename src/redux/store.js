import { configureStore } from '@reduxjs/toolkit'
import { searchRobots, requestRobots } from './searchRobots/reducers'

const store = configureStore({
    reducer: {
        searchRobots,
        requestRobots,
    },
})

export default store
