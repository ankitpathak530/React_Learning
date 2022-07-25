import logo from './logo.svg';
import './App.css';
import React, { createRef } from 'react';
import User from './User';
import { render } from '@testing-library/react';

//Use of Ref in class component

class App9Class extends React.PureComponent {


    constructor() {
        super();
        this.inputRef = createRef();
    }

    componentDidMount() {
        // console.warn(this.inputRef.current.value = 1000);
    }
    getVal() {
        console.warn(this.inputRef.current.value)
        this.inputRef.current.style.color = "red"
        this.inputRef.current.style.backgroundColor = "yellow"
    }

    render() {

        return (
            <div className="App" style={{ backgroundColor: 'skyblue' }}>

                <h2>My App9Class</h2>
                <h3>Ref in React</h3>

                <input type="text" ref={this.inputRef}></input>
                <button onClick={() => this.getVal()}>Check ref</button>

            </div >
        );
    }


}

export default App9Class;
