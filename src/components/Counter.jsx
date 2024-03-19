const Counter = () => {
  const toggleCounterHandler = () => {};

  return (
    <main>
      <h1>Redux Counter</h1>
      <b> 0 </b> <br />
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
