import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ITask {
  id: number;
  title: string;
  completed: boolean;
}

const initialState: ITask[] =
  JSON.parse(localStorage.getItem("tasks") as string) || [];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<ITask>) {
      state.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state));
    },

    removeTask(state, action: PayloadAction<number>) {
      const removeIndex = state.findIndex((item) => item.id === action.payload);
      state.splice(removeIndex, 1);
      localStorage.setItem("tasks", JSON.stringify(state));
    },

    completeTask(state, action: PayloadAction<number>) {
      state.find((item) => item.id === action.payload)!.completed = true;
      localStorage.setItem("tasks", JSON.stringify(state));
    },
  },
});

export const { addTask, removeTask, completeTask } = tasksSlice.actions;

export default tasksSlice.reducer;
