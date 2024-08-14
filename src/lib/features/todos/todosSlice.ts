import { todosType } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodosState {
  todos: todosType[];
}

//state
const initialState : TodosState = {
  todos : [],
}
const TodosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    initializeTodos: (state , action : PayloadAction<todosType[]>) => {
      state.todos = [...action.payload];
    },
    updateStatus:(state, action : PayloadAction<todosType>) => {
      const temp = [...state.todos];
      temp[temp.findIndex( todo => todo.id == action.payload.id)] = action.payload;
      state.todos = [...temp]

    },

  },
})

//actions

//dispatch

export const {initializeTodos, updateStatus} = TodosSlice.actions;

export default TodosSlice.reducer;