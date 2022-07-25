import logo from './logo.svg';
import './App.css';
import React from 'react';
import User from './User';
import { render } from '@testing-library/react';

//Use of PureComponent

class App8 extends React.PureComponent {


    constructor() {
        super();
        this.state = {
            count: 0
        }
    }


    render() {

        console.warn("rendereddddddddddddddd");

        return (
            <div className="App" style={{ backgroundColor: 'skyblue' }}>

                <h2>My App8</h2>
                <h3>Count {this.state.count}</h3>

                <button onClick={() => this.setState({ count: 1 })}>Update Count</button>

            </div >
        );
    }


}

export default App8;
