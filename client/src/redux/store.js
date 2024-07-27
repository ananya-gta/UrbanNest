import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice.js";
import { persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
  version: 1.0,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);









// Combine Reducers: Combine all individual reducers into one root reducer.
// Persist Config: Define how and where the Redux state should be saved.
// Persisted Reducer: Enhance the root reducer to handle state persistence.
// Configure Store: Create the Redux store using the persisted reducer.
// Persistor: Create a persistor to manage the persistence process.
// This setup ensures that your Redux state is saved to local storage and rehydrated when the application is loaded, providing persistence across page reloads
