// hamne yha redux ke throw index.html ke page pr balance state ka value show karvaya without react nice
// agar ham subscribe ke andar balanceCountElement.innerText = store.getState().balance; esko nahi likhe
//to initialy hamara state redux me jo update ho rha h vo nhi dikhega

import { createStore } from "redux";

const balanceCountElement = document.querySelector(".post_count");

const initialState = {
  balance: 0,
  name: "Ashutosh Mishra",
  age: 28,
};

const INCREMENT_BY_ONE = "bank/incrementByOne";
const DEPOSITE = "bank/deposite";
const WITHDRAW = "bank/withdraw";

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_BY_ONE:
      return { ...state, balance: state.balance + 1 };
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
  balanceCountElement.innerText = store.getState().balance;
});

store.dispatch({ type: DEPOSITE, payload: 2000 });
store.dispatch({ type: DEPOSITE, payload: 3000 });

// setTimeout(() => {
//   store.dispatch({ type: WITHDRAW, payload: 1200 });
// }, 3000);

store.dispatch({ type: WITHDRAW, payload: 1200 });

balanceCountElement.addEventListener("click", () => {
  store.dispatch({ type: INCREMENT_BY_ONE });
});
