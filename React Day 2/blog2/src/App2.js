import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App2() {

    const [data, setData] = useState(10)
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.warn("useEffect called with data");
    }, [data])

    useEffect(() => {
        console.warn("useEffect called with count")
    }, [count])



    return (
        <div className="App" style={{ backgroundColor: 'skyblue' }}>

            <h2>My App2</h2>
            <h3>Count {count}</h3>
            <h3>Data {data}</h3>
            <button onClick={() => setCount(count + 1)}>Update Count</button><br></br>
            <button onClick={() => setData(data + 1)}>Update Data</button>

        </div>
    );
}

export default App2;
