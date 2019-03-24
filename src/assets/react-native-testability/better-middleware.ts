interface HTTPClient {
    post(path: string, body: object): Promise<object>
}
interface Config {
  httpClient: HTTPClient
}

export const hogeMiddleware = (config: Config) => (store) {
  const { httpClient } = config
  return async action => {
    if (action.type === "CREATE_HOGE") {
      const res = await httpClient.post("/hoges", action.payload);
      store.dispatch({ type: "CREATE_HOGE_SUCCESS", payload: res });
    }
    const result = store.dispatch(action);
    return result;
  };
}

// ---

import axios from "axios";
import thunk from "redux-thunk";
import { hogeMiddleware } from "./hogeMiddleware";

applyMiddleware(hogeMiddleware({
  httpClient: axios
}), thunk);
