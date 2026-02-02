/*** 
    ab ham parcel ko install karenge aur redux ko parcel ke throw run karenge usase pahle parcel hai kya ?

    parcel :- Parcel = Bundler

    Parcel ek zero-config bundler hai jo modern JS, CSS, assets ko process karke browser-ready bundle banata hai.

    Agar tum modern JavaScript likhte ho jaise:

    import { createStore } from "redux";
    import "./style.css";
    import logo from "./logo.png";

    ❌ Browser directly samajh nahi pata ye sab.

    Parcel karta kya hai: 
    - ES Modules -Convert karke browser-compatible banata hai
    - Multiple JS files	ko Ek bundle file bana deta hai
    - CSS import :	CSS ko JS se link kar deta
    - Images/fonts :Optimize karke include karta
    - Dev server : Local server chala deta (auto refresh)

  install parcel : npm install parcel --save-dev
  install redux : npm install redux

jab aap redux ko import karte ho to html me jha script src likh rhe ho usi ke side me type="module" likhana padta hai
agar aap nhi likhate hai to error aayega.

 */

import { createStore } from "redux";

let initialState = {
  balance: 0,
  name: "Ashutosh Mishra",
  age: 28,
};

//yha function ka name kuch bhi rakh sakte like reducer, reducerBank , abc , reducerABC.

function reducer(state = initialState, action) {
  // agar ham function reducer(state, action ) me state me intialState nhi pass karenge to undefined aayega jab bhi
  // state ko get karne ki kosis karenge ex console.log("abc :", store.getState()); // undefined aayega
  if (action.type === "bank/deposite") {
    return { ...state, balance: state.balance + action.payload };
  } else if (action.type === "bank/withdraw") {
    return { ...state, balance: state.balance - action.payload };
  }

  return state;
}

// createStore me hamne reducer function pass kiya to vo bhi hame kuch return karega use ham kisi bhi name ke
// variable me store kra sakte hai normally variable ka name store rakhte hai aap chahe abc bhi likh sakte hai

//const abc = createStore(bankReducer);

const store = createStore(reducer);
console.log("store :", store);

// store ko console karane pr hame return me mila :observable, dispatch, getState, replaceReducer, subscribe
// jisme kam ka hamare dispatch, getState, subscribe hi hai filhal ke liye

console.log("current state :", store.getState()); // yha sara state mil jayega agar hamne reducer me pass kiya hoga to
