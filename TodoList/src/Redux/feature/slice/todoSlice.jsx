import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todo: [{id: 1, text: "Learn Redux React", completed: false}]
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers:{
        addTodo: (state, actions) =>{
            const newTodo = {
                id: nanoid(),
                text: actions.payload,
                completed: false
            }
            state.todo.push(newTodo)
        },
        removeTodo: (state, actions) =>{
            state.todo = state.todo.filter(todo => todo.id !== actions.payload)
        }
    }
})

export const { addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer