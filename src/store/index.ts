import thunk from "redux-thunk";
import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import themeReducer from "./modules/theme/reducer";
import modalManagementTransactionReducer from "./modules/modalManagement/reducer";
import transactionObjReducer from "./modules/transaction/reducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["modalManagement", "transactionValue"],
};

const rootReducers = combineReducers({
  theme: themeReducer,
  modalManagement: modalManagementTransactionReducer,
  transactionValue: transactionObjReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
