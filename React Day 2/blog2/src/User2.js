import logo from './logo.svg';
import './App.css';
import React, { useEffect, useInsertionEffect, useState } from 'react';

function User2(props) {

    return (
        <div className="App" style={{ backgroundColor: 'blue' }}>
            <h3>Hell User2</h3>
            <h4>Name:{props.emp.name}</h4>
            <h4>Salary:{props.emp.salary}</h4>
        </div>
    );
}

export default User2;
