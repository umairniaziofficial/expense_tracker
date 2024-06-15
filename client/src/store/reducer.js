import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  transactions: [],
};
export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    // eslint-disable-next-line no-unused-vars
    getTransactions: (state) => {},
  },
});

export const { getTransactions} = expenseSlice.actions;
export default expenseSlice.reducer;