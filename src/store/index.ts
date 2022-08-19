import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import modalManagementTransactionReducer from "./modules/modalManagement/reducer";
import themeReducer from "./modules/theme/reducer";
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
