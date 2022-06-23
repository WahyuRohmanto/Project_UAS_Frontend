// import createSlice untuk membuat slice
import data from "../../utils/constants/provinces";
import { createSlice } from "@reduxjs/toolkit";

/**
 * Buat slice : untuk menghasilkan action dan reducer
 * menerima param object : name, initialState, reducers
 */

const covidSlice = createSlice({
  name: "Covid Slice", //nama slice
  initialState: {
    //   nilai awal state covid
    covid: data,
  },
  reducers: {
    //   membuat reducer : untuk update state
    updateCovid : (state) => {
      state.covid()
    }

  },
});

// generate action dan reducers
const covidReducer = covidSlice.reducer;
const { addCovid } = covidSlice.actions;

// export reducer dan actions
export default covidReducer;
export { addCovid};
