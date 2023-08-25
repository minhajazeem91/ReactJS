import Slide from "./components/Slide";
import Title from "./components/Title";
import MyButton from "./components/MyButton";
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  
  const handleClcik=()=>{
    setCount(count+1)
  }

  return (
    <div>
      <Slide />
      <Title heading = "Hello World" />
      <Title heading={count}/>
      <MyButton onClick={handleClcik} text="Click Me" />

    </div>
  );
};

export default App;
