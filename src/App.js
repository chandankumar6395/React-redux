import React from 'react'
import './App.css';

import {useDispatch, useSelector } from 'react-redux';
import { NumInc,NumDec } from './Actions';


function App() {
  const myState=useSelector((state)=>state.ChnageNumber)
 const dispatch=useDispatch();

  return (
    <div className="counter-container">
      <h1>Counter: </h1>
      <div className="button-container">
        <button onClick={()=>dispatch(NumInc(5))}>Increment</button>
        <input type="text" value={myState}/>
        <button onClick={()=>dispatch(NumDec())}>Decrement</button>
      </div>
    </div>
  );
};


export default App