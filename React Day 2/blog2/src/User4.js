import logo from './logo.svg';
import './App.css';
import React, { forwardRef } from 'react';

// value of given input box will be controled by parent componet

function User4(props, refuBro) {


    return (
        <div className="App" style={{ backgroundColor: 'skyblue' }}>
            <h3>Hell User4 </h3>
            <input type="text" ref={refuBro}></input>

        </div >
    );
}

export default forwardRef(User4);
