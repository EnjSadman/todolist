import { todosType } from "@/lib/types";
import { createSlice } from "@reduxjs/toolkit";

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

  },
})

//actions

//dispatch

export default TodosSlice.reducer;