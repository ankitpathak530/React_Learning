import { useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import './App.css';

function Protected(props) {

    const { Component } = props
    const navigate = useNavigate();

    useEffect(() => {
        let login = localStorage.getItem('login');
        if (!login) {
            navigate('/login');
        }
    })

    return (
        <div className="App">
            a
            <Component />
        </div>
    );
}

export default Protected;
