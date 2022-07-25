import React, { useRef } from "react";
import User4 from "./User4";

// use of forwerdRef hook in functional component
//changing input value of child component from parent component

function App11() {

    let inputRef = useRef(null);

    function updateInput() {

        console.warn(inputRef.current.value)
        inputRef.current.style.color = "red"
        inputRef.current.style.backgroundColor = "yellow"
        inputRef.current.focus();
    }


    return (
        <div className="App">
            <h1>My App11</h1>
            <h2>forwerdRef hook</h2>

            <User4 ref={inputRef} />

            <br></br>
            <button onClick={updateInput}>Update Input from parent</button>


        </div>
    );
}

export default App11;