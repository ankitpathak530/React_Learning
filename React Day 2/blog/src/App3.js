import React from "react";
import './App.css';

class App3 extends React.Component {


    constructor() {
        super();
        this.state = {
            name: "sidhu",
            count: 0,
        }
        console.info("constructor App3");
    }

    componentDidMount() {
        console.info("componentDidMount App3");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.info("component Did Updated: preCount:", prevState.count, this.state.count);

    }



    render() {
        console.info("render App3");

        return (
            <div className="App" style={{ backgroundColor: 'green' }}>
                <h1>Hell App3</h1>
                <h3>Component Did Mount {this.state.name} {this.state.count}</h3>
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }} >Update name</button>
            </div>
        )
    }

    componentWillUnmount() {
        console.info("componentWillUnmount App3");
    }
}

export default App3;