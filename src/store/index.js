import rootReducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { fetchSnippetsWatcher } from "../screens/redux/saga";

const sagaMiddleWare = createSagaMiddleware();
export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleWare),
});

sagaMiddleWare.run(fetchSnippetsWatcher);
