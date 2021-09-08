import React, {useState} from 'react';

//styles
import './App.css';
import './mystyle.css';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//local components
import {Container} from 'react-bootstrap';

function App() {

  const [counter, setCounter]=useState(0);
  const [toggle, setToggle]=useState(false);

  const increamentor = () =>{
    setCounter((prev)=>prev+1);
    console.log(counter);
  }

  const toggler =()=>{
    setToggle((prev)=> !prev);
  }
  return (
    <Container fluid className='App.css'>
      <h1 className={toggle ? 'active': ''}>Hello roger</h1>
      <h2>Cont: {counter}</h2>
      <button onClick={increamentor}>Increament Button</button>
      <button onClick={toggler}>Toggler button</button>
    </Container>
  );
}

export default App;
