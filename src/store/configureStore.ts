import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

export interface RootStore {
  items?: any;
  itemsHasErrored?: any;
  itemsIsLoading?: any;
}

export default function configureStore(initialState: RootStore) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
}
