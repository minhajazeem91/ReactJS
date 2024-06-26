import MyButton from './components/MyButton';
import Heading from './components/heading';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);

  const HandleInc = () => {
    setNumber(number+1);
  }

  const HandleDec = () => {
    setNumber(number-1);
    number == 0 ? setNumber(number) : setNumber(number-1);
  }
   return (
    <div style={{
      textAlign : "center"
    }}>
    <Heading heading="Counter App using Increment & Decrement"/>
    <h2>Counter Number is - {number} </h2>
    <MyButton onClick={HandleInc} text="increase" /> &nbsp;
    <MyButton onClick={HandleDec} text="decrease" />
  </div>
   
  );
}

export default App;
