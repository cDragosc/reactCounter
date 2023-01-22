import { useState } from "react";

import "./styles.css";
 
sdsdsds
export default function App() {
  let [value, setValue] = useState(0);
  let [currrency, setCurrency] = useState('');
  // const [year, setYear] = useState(2000);
  const handleCurrency = (evt) => {
     const currrencyValue = evt.currentTarget.value;
     setCurrency(currrencyValue);   
  } 

  const handleIncrement = () => {
    // setYear(year + 5);
    setValue(value + 1);
  };

  const handleDecrement = () => {
    // setYear(year - 5);

    setValue(value - 1);
  };

  const handleReset = () => {
    setValue(0);
    setCurrency('');
  };

  return (
    <div className="App">
      <h3>Counter App</h3>
      <h1 className={value >= 1 ? "green" : (value === 0? "blue" : "red")}>{value}{currrency}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>
      <select onChange={handleCurrency} name="subject" id="subject">
        <option value="" selected>Select Currrency</option>
        <option value="€" >Euro</option>
        <option value="$" >Dollar</option>
        <option value="£" >Pound</option>
      </select>
      
    </div>

  );
}