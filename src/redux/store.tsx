// //Bài 2
// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./userSlice";

// const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export default store;

//Bài 3
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
