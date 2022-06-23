// import configureStore : untuk membuat store
import { configureStore } from "@reduxjs/toolkit";
import covidReducer from "../Features/covidSlice/index";

/**
 * membuat store : untuk state global
 * menerima param object : reducer
 * menyimpan slice yang sudah di buat
 */
const store = configureStore({
  reducer: {
    covid: covidReducer,
  },
});

// Export defaul store
export default store;
