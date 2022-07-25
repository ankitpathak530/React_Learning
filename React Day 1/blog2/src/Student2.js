import React from "react";

export default class Student2 extends React.Component {

    render() {

        console.log(this.props.name)

        return (
            <div style={{ backgroundColor: 'skyblue' }}>

                class component student {this.props.name}
            </div >
        )
    }


}