import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';

const App = () => {
  const countervalue = useSelector((state)=>state);
  const dispatch= useDispatch();

  const increasebutton=()=>{
    dispatch({type:"INCREMENT"})
  };

  const decreasebutton=()=>{
    dispatch({type:"DECREMENT"})
  };

  const resetbutton=()=>{
    dispatch({type:"RESET"})
  };



  return (
  <>
  <h1>{countervalue}</h1>
  <button onClick={increasebutton}>increment </button>
  <button onClick={decreasebutton}>decrement </button>
  <button onClick={resetbutton}>Reset </button>
  </>
  );
};

const reducer = (state = 0, action) =>{switch(action.type){
  case "INCREMENT":
return state+1
case "DECREMENT":
return state-1
case "RESET":
return state=0
default: return state;};


}
const store = createStore (reducer);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);


