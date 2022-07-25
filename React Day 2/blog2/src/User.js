import logo from './logo.svg';
import './App.css';
import React, { useEffect, useInsertionEffect, useState } from 'react';

function User(props) {

    useEffect(() => {
        console.warn("useEffect called with props.count");
    }, [props.count])

    useEffect(() => {
        console.warn("useEffect called with props.data");
    }, [props.data])


    return (
        <div className="App" style={{ backgroundColor: 'blue' }}>
            <h3>Count Props {props.count}</h3>
            <h3>Data Props {props.data} </h3>
        </div>
    );
}

export default User;
