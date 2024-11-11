import { configureStore } from "@reduxjs/toolkit";
import commonReducer from "./slices/common";
import authReducer from "./slices/auth.slide";
import { api } from "./api";

export const makeStore = () =>
  configureStore({
    reducer: {
      common: commonReducer,
      auth: authReducer,
      // appApi: appApiReducer,
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
