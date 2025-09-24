import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    todos: [] as Todo[],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos = [
        ...state.todos,
        {
          id: new Date().getTime().toString(),
          text: action.payload,
          completed: false,
        },
      ];
    },
    toggleTodo: (state, action: PayloadAction<{ id: string }>) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, updateTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
