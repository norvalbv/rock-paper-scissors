import { createStore } from "redux";

const changeState = (state, action) => {
  switch (action.type) {
    case "Rock":
      return "rock";
    default:
      return "ERROR";
  }
};

const store = createStore(changeState);

console.log(store.getState())