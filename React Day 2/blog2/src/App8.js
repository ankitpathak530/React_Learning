import React from "react";
import User3 from "./User3";

function App8() {

    //fetching data from child to parent
    function parentAlert(data) {
        alert(data);
    }

    return (
        <React.Fragment>
            <h1>My App8</h1>
            <h2>Lifting State Up</h2>
            <User3 data={parentAlert} />
        </React.Fragment>


    );
}

export default App8;