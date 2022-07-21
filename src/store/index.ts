import thunk from "redux-thunk";
import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import themeReducer from "./modules/theme/reducer";

const reducers = combineReducers({
  theme: themeReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
