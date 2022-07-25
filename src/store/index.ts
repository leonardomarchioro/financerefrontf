import thunk from "redux-thunk";
import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import themeReducer from "./modules/theme/reducer";
import modalCreateTransactionReducer from "./modules/transactionModal/reducer";

const reducers = combineReducers({
  theme: themeReducer,
  modalCreate: modalCreateTransactionReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
