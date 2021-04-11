import React from "react";

function App() {
  const [count, setCount] = React.useState(() => 0);

  const handleClick = () => {
    setTimeout(() => setCount((curCount) => curCount + 1), 500);
  };

  return (
    <>
      Current count: {count}
      <br />
      <button onClick={handleClick}>Increment</button>
    </>
  );
}

export default App;
