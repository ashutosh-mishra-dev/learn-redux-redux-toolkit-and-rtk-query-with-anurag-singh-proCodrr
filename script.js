//ham yha redux tool ka use kar rhe hai jab browser extension se redux tool ko download karte hai to

import { createStore } from "redux";

const initialState = {
  balance: 0,
  name: "Ashutosh Mishra",
  age: 28,
};

const DEPOSITE = "bank/deposite";
const WITHDRAW = "bank/withdraw";

function reducer(state = initialState, action) {
  switch (action.type) {
    case DEPOSITE:
      return { ...state, balance: state.balance + action.payload };
    case WITHDRAW:
      return { ...state, balance: state.balance - action.payload };
    default:
      return state;
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
console.log("store :", store);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: DEPOSITE, payload: 2000 });
store.dispatch({ type: DEPOSITE, payload: 3000 });
store.dispatch({ type: WITHDRAW, payload: 1200 });
