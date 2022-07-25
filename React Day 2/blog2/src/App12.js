import React, { useRef, useState } from "react";

// use of HOC (high order component)
//High order component takes component as input and return component
function App12() {

    return (
        <div className="App">
            <h1>My App12</h1>
            <h2>HOC - High order component</h2>

            <HOCRed cmp={Counter} />
            <HOCGreen cmp={Counter} />


        </div>
    );
}

function HOCRed(props) {
    return (
        <h2 style={{ color: 'red', backgroundColor: 'pink ' }}>
            <props.cmp />
        </h2>
    )
}
function HOCGreen(props) {
    return (
        <h2 style={{ color: 'black', backgroundColor: 'green ' }}>
            <props.cmp />
        </h2>
    )
}

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)}>Update</button>
        </div>
    )
}



export default App12;