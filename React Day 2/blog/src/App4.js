import React from "react";
import './App.css';

class App4 extends React.Component {

    componentWillUnmount() {
        console.info("componentWillUnmount App4");
    }




    render() {
        console.info("render App4");

        return (
            <div className="App" style={{ backgroundColor: 'green' }}>
                <h1>Hell App4</h1>

            </div>
        )
    }


}

export default App4;