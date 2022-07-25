import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import User from './User';
import { render } from '@testing-library/react';

// useMemo helps to improve performance to run function only on codition

function App3() {

    const [data, setData] = useState(10)
    const [count, setCount] = useState(0);


    const multiCountMemo = React.useMemo(function multiCount() {
        console.warn("mutli count called");
        return count * 2;
    }, [count])



    return (
        <div className="App" style={{ backgroundColor: 'skyblue' }}>

            <h2>My App3</h2>
            <h3>Count {count}</h3>
            <h3>Data {data}</h3>
            <h3>Multicount {multiCountMemo}</h3>

            {/* <User count={count} data={data} /> */}

            <button onClick={() => setCount(count + 1)}>Update Count</button><br></br>
            <button onClick={() => setData(data + 1)}>Update Data</button>

        </div>
    );
}

export default App3;
