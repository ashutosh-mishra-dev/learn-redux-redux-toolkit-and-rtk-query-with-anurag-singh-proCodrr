import { createStore } from "redux";

let initialState = {
  balance: 0,
  name: "Ashutosh Mishra",
  age: 28,
};

function reducer(state = initialState, action) {
  if (action.type === "bank/deposite") {
    return { ...state, balance: state.balance + action.payload };
  } else if (action.type === "bank/withdraw") {
    return { ...state, balance: state.balance - action.payload };
  }

  return state;
}

const store = createStore(reducer);
console.log("store :", store);

//MUTLIPLE CONSOLE.LOG NA LIKHANA PADE USKE LIYE HAM SUBSCRIBE KA USE KARENGE

store.subscribe(() => {
  console.log(store.getState());
});
//console.log("current state :", store.getState());

store.dispatch({ type: "bank/deposite", payload: 2000 });
//console.log(store.getState());

store.dispatch({ type: "bank/deposite", payload: 3000 });
//console.log(store.getState());

store.dispatch({ type: "bank/withdraw", payload: 1200 });
//console.log(store.getState());
