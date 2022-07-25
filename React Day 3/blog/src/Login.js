import { useNavigate } from "react-router-dom"
import { useEffect } from 'react';
import './App.css';

function Login() {

    const navigate = useNavigate();

    useEffect(() => {
        let login = localStorage.getItem('login');
        if (login)
            navigate('/filter');
    })

    function getLogin() {

        localStorage.setItem('login', true);

    }


    return (
        <div className="App">
            <h1>Login </h1><br></br>

            <input type="text" placeholder='username'></input><br></br><br></br>
            <input type="text" placeholder='password'></input><br></br><br></br>
            <button onClick={getLogin}>Login</button>
        </div>
    );
}

export default Login;
