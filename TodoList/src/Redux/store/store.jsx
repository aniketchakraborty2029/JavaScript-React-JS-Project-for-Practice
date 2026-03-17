import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../feature/slice/todoSlice";

const store = configureStore({
  reducer: { todoReducer }
});

export default store;