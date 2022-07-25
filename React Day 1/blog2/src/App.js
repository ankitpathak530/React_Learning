import './App.css';
import User from './User';
import React, { useState } from 'react'
import Student from './Student';
import Student2 from './Student2';

function App() {


  const [data, setData] = useState(0);

  function apple() {
    alert("apple called");
  }
  function updateData() {
    setData(data + 1);
  }

  return (
    <div className="App">


      {/* //////////Part 1//////////////// */}

      <h1>{data}</h1>
      <button onClick={() => updateData()} >click to change hello world</button> <br></br>
      <button onClick={apple} >click to call apple fn</button> <br></br>
      <button onClick={() => apple()} >click to call apple fn</button> <br></br>
      <button onClick={() => alert("alert clicked")}>click to alert</button>
      <User />

      {/* //////////////Part 2 ////////////////// */}

      <Student name={"Ankit"} email="ankit@123@gmail.com" />
      <Student name={"Aman"} email="amn@123@gmail.com" />
      <Student name={"Rahul"} email="rahul@123@gmail.com" />



      <Test />

    </div >
  );
}

class Test extends React.Component {

  constructor() {
    super();
    this.state = {
      name: "Sonu"
    }
  }

  render() {
    return (
      <div className='App2'>
        {/* props with class */}
        < Student2 name={this.state.name} />
        <button onClick={() => this.setState({ name: "Monu" })}>Update name and send</button>
      </div>
    )
  }
}




export default App;
