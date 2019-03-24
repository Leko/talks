import axios from "axios";

export function hogeMiddleware(store) {
  return async action => {
    if (action.type === "CREATE_HOGE") {
      const res = await axios.post("/hoges", action.payload);
      store.dispatch({ type: "CREATE_HOGE_SUCCESS", payload: res });
    }
    const result = store.dispatch(action);
    return result;
  };
}

// ---

import thunk from "redux-thunk";
import { hogeMiddleware } from "./hogeMiddleware";

applyMiddleware(hogeMiddleware, thunk);
