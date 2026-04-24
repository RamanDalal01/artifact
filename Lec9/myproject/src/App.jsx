import React, { useRef, useState } from "react";

const App = () => {
  const inputRef = useRef(null);
  const [showName, setShowName] = useState("");

  function handleClick() {
    setShowName(inputRef.current?.value ?? "");
  }

  return (
    <div>
      <h1>useRef</h1>
      <input ref={inputRef} type="text" placeholder="Enter your name" />
      <button onClick={handleClick}>Click</button>
      <h1>name is {showName}</h1>
    </div>
  );
};

export default App;