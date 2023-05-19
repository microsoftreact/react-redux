import { createStore } from "redux";

const counterReducer = (state, action) =>{
    switch (action.type) {
      case "INCREMEND":
        return { ...state, counter: state.counter + action.amount };
      case "DECREMEND":
        return { ...state, counter: state.counter - 1 };
      case "TOGGLE":
        return { ...state, show: !state.show, counter:0 };
      default:
        return state;
    }
}

const store = createStore(counterReducer, ({
    counter: 3,
    show : true
}))

export default store