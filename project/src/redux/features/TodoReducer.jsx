import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name: "todo",
    initialState: {
        todo:[]
    },
    reducers: {
        addTodo: (state,action) => {
            state.todo.push(action.payload)
        },
        editTodo: (state, action) => {
            console.log(state.todo);
            console.log(action);
            const todoEditIndex = state.todo.findIndex((index) => index.id === action.payload.id)
            console.log(todoEditIndex);
            if(todoEditIndex !== -1) {
                console.log( state.todo[todoEditIndex].text);
                console.log(action.payload);
                console.log(action.payload.newtext);
                state.todo[todoEditIndex].text = action.payload.newtext
            }
        }, 
        removeTodo: (state, action) => {
             state.todo  =   state.todo.filter((index) => index.id !== action.payload)
        }
    }
})

export const { addTodo, editTodo, removeTodo } = TodoSlice.actions
export default TodoSlice.reducer