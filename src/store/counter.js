import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 2, showCounter: true },
  reducers: {
    increment(state) {
      state.value++;
    },
    increase(state, action) {
      state.value = state.value + action.payload;
    },
    decrement(state) {
      state.value--;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;