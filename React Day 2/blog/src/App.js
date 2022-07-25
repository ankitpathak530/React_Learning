import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ShowHideInputData from './ShowHideInputData'
import BasicForm from './BasicForm';
import Profile from './Profile';
import User from './User';
import Member from './Member';
import App2 from './App2';
import App3 from './App3';

function App() {

  function getData() {
    alert("Hello from App")
  }

  return (
    <div className='App'>
      {/* <ShowHideInputData /> */}
      {/* <BasicForm /> */}
      {/* <Profile /> */}

      {/* <User data={getData} />

      <div style={{ float: 'right' }}>
        <Member data={
          getData} />
      </div> */}

      {/* <App2 /> */}


      <App2 />

    </div >
  )

}


export default App;
