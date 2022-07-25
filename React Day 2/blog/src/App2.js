import React from "react";
import './App.css';
import App4 from "./App4";

class App2 extends React.Component {


    constructor() {
        super();
        console.info("constructor App2");
        this.state = {
            show: true
        }
    }



    render() {


        console.info("render App2");
        return (
            <div className="App">
                <h1>Hello App2</h1>

                <button onClick={() => this.setState({ show: !this.state.show })}>Toggle Child component</button>
                {
                    this.state.show ? <App4 /> : null
                }


            </div >
        )
    }

    componentWillUnmount() {
        console.info("componentWillUnmount App2");
    }


}

export default App2;