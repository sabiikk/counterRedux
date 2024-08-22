import { createSlice } from "@reduxjs/toolkit";


//to initilize the store the file as slice we use a method createslice
 export const counterSlice= createSlice({
    //name has no importance
  name:'counterApp',
  //initial state create
  initialState:{
    value:0
  },
  reducers:{
    // logic to update the value
    // actions are created inside the reducers
    increment:(state,data)=>{
      if(!data.payload){
        state.value=state.value + 1
      }else{
        state.value=state.value + data.payload

      }
        
    },
    decrement:(state,data)=>{
      if(!data.payload){
        state.value -= 1
      }
      else{
        state.value -= data.payload //sate.value = state.value-1
      }
        
    },
    reset:(state)=>{
        state.value=0;
    }
  },
  
});
export const {increment,decrement,reset}=counterSlice.actions;
export default counterSlice.reducer;