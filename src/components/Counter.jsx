import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };
  const increaseHandler = () => {
    dispatch({ type: "INCREASE", amount: 5 });
  };
  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };
  const toggleCounterHandler = () => {
    dispatch({ type: "TOGGLE" });
  };

  return (
    <main>
      <h1>Redux Counter</h1>
      <b> {showCounter && counter} </b> <br />
      <button onClick={incrementHandler}>Increment</button> <b />
      <button onClick={increaseHandler}>Increment by 5</button> <b />
      <button onClick={decrementHandler}>Decrement</button> <b/>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
