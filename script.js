/*** 
 yha hamne dekha rahe hai kis prakar redux me state , reducer function aur action pr kaam kiya jata hai
 */

let initialReduxState = {
  post: 0,
  name: "Ashutosh Mishra",
  age: 28,
};

let prevState = initialReduxState;

console.log("prevState : ", prevState);

/**
    agar ham if ke return object me ...state (spread object ) pass nhi karenge to  initialReduxState me 
    jo state (post,name,age) hai unme se sirf post state change ho ga baki ka state remove ya delete ho jayega 
    
    function reducer(state, action) {
        if (action.type === "post/increment") {
        return { post: state.post + 1 };
        }
    }

 */
function reducer(state, action) {
  if (action.type === "post/increment") {
    return { ...state, post: state.post + 1 };
  } else if (action.type === "post/decrement") {
    return { ...state, post: state.post - 1 };
  }

  //agar ham yha return state nhi return karenge aur user ne mano condition base type pass nhi kiya
  // to by default undefined return hoga jo ki galat hai esi liye hamesa return state karna chahiye
  //  jisse hamara last action data pass ho sake
  return state;
}

initialReduxState = reducer(initialReduxState, { type: "post/increment" });
console.log("state after increment : ", initialReduxState);

initialReduxState = reducer(initialReduxState, { type: "post/increment" });
console.log("state after increment : ", initialReduxState);

initialReduxState = reducer(initialReduxState, { type: "post/decrement" });
console.log("state after decrement : ", initialReduxState);

initialReduxState = reducer(initialReduxState, { type: "post/abcd" });
console.log("state after false condition : ", initialReduxState);
