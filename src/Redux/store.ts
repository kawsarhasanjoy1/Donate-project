import { configureStore } from "@reduxjs/toolkit";
import { baseAPi } from "./baseApi";
import authReducer from "./fetures/authSlice.tsx";
import darkModeReducer from "./fetures/darkModeSlice.ts";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
const createPersist = {
  key: "auth",
  storage,
};

const persistReducers = persistReducer(createPersist, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistReducers,
    darkMode: darkModeReducer,
    [baseAPi.reducerPath]: baseAPi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseAPi.middleware),
});

export const persistStor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
