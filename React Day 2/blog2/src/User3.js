import logo from './logo.svg';
import './App.css';
import React, { useEffect, useInsertionEffect, useState } from 'react';

// child to parent data transfer

function User3(props) {

    let name = "Ankit pathak mutuswamiwngopalayear"

    return (
        <div className="App" style={{ backgroundColor: 'skyblue' }}>
            <h3>Hell User3 component</h3>

            <button onClick={() => props.data(name)}>Click me</button>
        </div>
    );
}

export default User3;
