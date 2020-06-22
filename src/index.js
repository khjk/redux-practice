import { createStore } from "redux";

const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  switch(action.type){
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const store = createStore(countModifier);

const onChange = () => {
  number.innerText = store.getState();
}

store.subscribe(onChange);

plus.addEventListener("click", ()=> store.dispatch({type: ADD}));
minus.addEventListener("click", ()=>store.dispatch({type: MINUS}));