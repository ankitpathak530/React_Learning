import React from "react";

function Member(props) {
    return (
        <div className="App">
            <h1>User Component</h1>
            <button onClick={() => props.data()}>Call data function</button>
            <button onClick={props.data}>Call data function</button>
        </div>
    )
}

export default Member;