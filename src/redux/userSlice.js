import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: 19,
  reducers: {
    addOne: (state) => {
      state = state + 1;
      return state;
    },
    addCustomNumber: (state, action)=>{
        console.log(action)
        state = state + action.payload
        return state
    }
  },
});

export default userSlice.reducer;

export const { addOne, addCustomNumber } = userSlice.actions;
