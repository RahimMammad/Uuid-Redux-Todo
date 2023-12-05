import { configureStore } from "@reduxjs/toolkit"
import CounterReducer from "./features/CounterReducer"
import TodoReducer from "./features/TodoReducer"

export const store = configureStore({
    reducer: {
        counter: CounterReducer, 
        todo: TodoReducer
    }
})