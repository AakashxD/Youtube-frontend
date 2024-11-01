import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice"
const store = configureStore({
  reducer: {
    app: appSlice,
    search:searchSlice
    
  },
});
export default store;
// LRU cache - least recently cache we can store limited cache we can define max size [100]
// N-level nested comments