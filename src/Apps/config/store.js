/* eslint-disable no-dupe-keys */
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { persistConfig, persistConfigOthers } from "./persistConfig";
import { reducerAuth, recuderInlokal } from "./reducer";

const persistedReducerAuth = persistReducer(persistConfig, reducerAuth);
const persistedReducerInlokal = persistReducer(
  persistConfigOthers,
  recuderInlokal
);

export const store = configureStore({
  reducer: combineReducers({
    auth: persistedReducerAuth,
    inlokal: persistedReducerInlokal,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
