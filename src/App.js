import logo from "./logo.svg";
import "./App.css";
import { useState, useRef, useEffect } from "react";
import { Card } from "./card";

const initialCount = 50;
const initialAmount = 10;

function App() {
  const [count, setCount] = useState(initialCount);
  const [amount, setAmount] = useState(initialAmount);
  const [showError, setShowError] = useState(false);
  const [items, setItems] = useState([]);
  const [entity, setEntity] = useState("users");
  const inputRef = useRef(0);

  const add = () => {
    setCount((previousCount) => {
      return previousCount + parseInt(amount);
    });
  };
  const substract = () => {
    setCount((previousCount) => {
      return previousCount - parseInt(amount);
    });
  };
  const reset = () => {
    setCount(initialCount);
    console.log(inputRef.current.value);
  };
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
    if (amount > 10) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  };

  // empty dependency array means the useeffect is gonna be executed only once when the component just mounts
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${entity}`)
      .then((data) => data.json())
      .then((data) => setItems(data));
  }, [entity]);

  return (
    <div className="App">
      {count}
      <input value={amount} onChange={handleAmountChange} type="number" />
      <input ref={inputRef} type="number" />
      <button onClick={add}>add 1</button>
      <button onClick={substract}>substract 1</button>
      <button onClick={reset}>reset</button>
      {showError && <div>the max amount allowed is 10</div>}
      <div>
        <button onClick={() => setEntity('posts')}>posts</button>
        <button onClick={() => setEntity('albums')}>albums</button>
        <button onClick={() => setEntity('users')}>users</button>
        <h1>{entity}</h1>
      </div>
      <ul>
        {items.map((item) => (
          <pre key={item.id}>{JSON.stringify(item)}</pre>
        ))}
      </ul>
    </div>
  );
}

export default App;
