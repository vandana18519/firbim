import { createStore } from "easy-peasy";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { persistStore, persistReducer } from "redux-persist";
import localForage from "localforage";
import { persist } from "easy-peasy";

//import models from "./src/models";
import { action, thunk } from "easy-peasy";

const defaultState = {
  name: "Vandana",
  course: "Learn"
};

const profile = {
  ...defaultState,

  updateUserProfileInClientStore: action((state, payload) => ({
    ...state,
    ...payload
  }))
};

//import profile from "./profile";

const models = {
  profile
};
const store = createStore(persist(models), {
  disableImmer: true,
  devTools: process.env.NODE_ENV === "development"
});

export default store;