import { useDispatch } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
  resetCounter
} from "../redux/action";
// import { dispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const handleIncrement = () => {
    const action = incrementCounter(1);
    dispatch(action);
  };
  const handleDecrement = () => {
    const action = decrementCounter(1);
    dispatch(action);
  };
  const handleReset = () => {
    const action = resetCounter(1);
    dispatch(action);
  };
  return (
    <div>
      <button onClick={handleIncrement}>INCREMENT</button>
      <button onClick={handleDecrement}>DECREMENT</button>
      <button onClick={handleReset}>RESET</button>
    </div>
  );
};

export default Counter;
