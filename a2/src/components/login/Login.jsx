import { Link } from 'react-router-dom';

function Login() {

    return (
        <div>
            <h1>F1 OnTrack</h1>
            <h2>Login</h2>
            <input  
                id="usernameField"
                type="text"
                placeholder="Username"
            />
            <input 
                id="passwordField"
                type="password"
                placeholder="Password"
            />

            <Link to="/home">
                <button>Login</button>
            </Link>
        </div>
    );
}

export default Login;