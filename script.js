/*** 
 yha hamne dekha rahe hai kis prakar mutate aur immutate state performe karta hai 

 mutate state : -

 immutated state :-
 
 */

let state = {
  count: 0,
};

let prevState = state;

console.log("prevState : ", prevState);

function increment() {
  /*** Mutating State  */
  //state.count = state.count + 1;

  /*** Not Mutating State  */
  state = { count: state.count + 1 };
}

increment();
console.log("State : ", state);
increment();
console.log("State : ", state);
increment();
console.log("State : ", state);
