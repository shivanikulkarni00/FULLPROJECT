import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "Dummy value",
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
      dataTransfer: (state,action) => {
          console.log("dataTransfer Called!");
          console.log(action.payload);
          state.value = action.payload;
          
          
    }
    },
});

// Action creators are generated for each case reducer function
export const { dataTransfer } = categorySlice.actions;

export default categorySlice.reducer;