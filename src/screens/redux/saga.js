import { put, takeLatest } from "redux-saga/effects";
import { fetchSnippetsTypeName, landingActions } from "./slice";
import { mockData } from "./mock";

export function* fetchSnippetsWatcher() {
  yield takeLatest(fetchSnippetsTypeName, fetchSnippetsWorker);
}

function* fetchSnippetsWorker(action) {
  try {
    //we can call Actual API here to get data from Server
    yield put(landingActions.storeSnippets(mockData));
  } catch (err) {
    //error handling
  }
}
