import React, { useRef } from "react";

// use of useRef hook in functional component

function App10() {

    let inputRef = useRef(null);

    function getVal() {

        console.warn(inputRef.current.value)
        inputRef.current.style.color = "red"
        inputRef.current.style.backgroundColor = "yellow"
        inputRef.current.focus();
    }


    return (
        <>
            <h1>My App10</h1>
            <h2>useRef hook</h2>


            <input type="text" ref={inputRef}></input>
            <button onClick={getVal}>Check ref</button>


        </>


    );
}

export default App10;