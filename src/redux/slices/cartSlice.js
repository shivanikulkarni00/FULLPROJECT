import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addInCart: (state,action) => {
          console.log("Adding Cart Called!");
          console.log(action.payload);
          state.value.push(action.payload);
          
    },
    removeFromCart: (state,action) => {
        console.log("Adding Cart Called!");
        console.log(action.payload);
        var res = state.value.filter((obj) => obj.id != action.payload.id);
        console.log(res);
        state.value=res;
        
        
    },
  },
});

// Action creators are generated for each case reducer function
export const { addInCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
