import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  selectCount,
} from "../CounterSlice";
import "./Counter.css";

const Counter = () => {
  const count = useSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <button
        aria-label="Increment value"
        className="row"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <span className="value">{count}</span>
      <button
        aria-label="Decrement value"
        className="row"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <div>
        <input
          value={incrementAmount}
          aria-label="Set increment amount"
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>

        <button
          onClick={() =>
            dispatch(incrementAsync(Number(incrementAmount) || 0))
          }
        >
          Add Async
        </button>
      </div>
    </div>
  );
};

export default Counter;
