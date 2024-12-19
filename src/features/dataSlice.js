import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ ...action.payload, id: Date.now() });
    },
    updateTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, updateTask, deleteTask } = dataSlice.actions;
export default dataSlice.reducer;
