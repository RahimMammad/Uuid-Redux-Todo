import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { decreaseByUser, decrement, increaseByUser, increment } from '../redux/features/CounterReducer';

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increaseByUser(69))}>Akhmad+</button>
        <button onClick={() => dispatch(decreaseByUser(31))}>Akhmad-</button>
    </div>
  )
}

export default Counter