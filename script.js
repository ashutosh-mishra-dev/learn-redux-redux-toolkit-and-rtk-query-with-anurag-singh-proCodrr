//using switch case

import { createStore } from "redux";

const initialState = {
  balance: 0,
  name: "Ashutosh Mishra",
  age: 28,
};

const DEPOSITE = "bank/deposite";
const WITHDRAW = "bank/withdraw";

function reducer(state = initialState, action) {
  /**if (action.type === DEPOSITE) {
    return { ...state, balance: state.balance + action.payload };
  } else if (action.type === WITHDRAW) {
    return { ...state, balance: state.balance - action.payload };
  }
  return state; */

  switch (action.type) {
    case DEPOSITE:
      return { ...state, balance: state.balance + action.payload };
    case WITHDRAW:
      return { ...state, balance: state.balance - action.payload };
    default:
      return state;
  }
}

const store = createStore(reducer);
console.log("store :", store);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: DEPOSITE, payload: 2000 });
store.dispatch({ type: DEPOSITE, payload: 3000 });
store.dispatch({ type: WITHDRAW, payload: 1200 });
