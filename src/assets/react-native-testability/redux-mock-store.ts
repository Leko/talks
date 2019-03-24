import { mockStore } from "redux-mock-store";
import thunk from "redux-thunk";
import { register } from "./usecases/register";

const createStore = mockStore([thunk]);

it("ユーザ登録APIがdispatchされること", async () => {
  const state = {};
  const store = createStore(state);
  const payload = { username: "test", password: "test" };

  await store.dispatch(register(payload));

  const action = store
    .getActions()
    .find(({ type }) => type === "REGISTER_USER");
  assert(action);
});
