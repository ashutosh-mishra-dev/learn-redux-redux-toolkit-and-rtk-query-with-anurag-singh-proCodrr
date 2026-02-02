/*** 
    yha ham log details me ek bank ka example leke work karenge jaise deposite karna, withdraw, balance check karna
    
    reducer method (bankReducer) me state aur action pass kiya ja rha hai action me hame kis type ka action hai use 
    bhi pass karte hai mean kya use withdraw karna chahta hai ya balance inquery karna chahta hai ya paise ko deposite
    karna chahta hai

    jab ham paise lene ya dene ki bat kar rhe hai tab ham action ko batana bhi pade ga jise ham payload ke jariye batate hai

 */

let initialState = {
  balance: 0,
  name: "Ashutosh Mishra",
  age: 28,
};

console.log("current state is : ", initialState);

function bankReducer(state, action) {
  if (action.type === "bank/deposite") {
    return { ...state, balance: state.balance + action.payload };
  } else if (action.type === "bank/withdraw") {
    return { ...state, balance: state.balance - action.payload };
  }

  return state;
}

initialState = bankReducer(initialState, {
  type: "bank/deposite",
  payload: 1000,
});
console.log("after deposit money : ", initialState);

initialState = bankReducer(initialState, {
  type: "bank/deposite",
  payload: 1000,
});
console.log("after deposit money : ", initialState);

initialState = bankReducer(initialState, {
  type: "bank/withdraw",
  payload: 500,
});
console.log("after withdraw money : ", initialState);

console.log("total balance : ", initialState.balance);
