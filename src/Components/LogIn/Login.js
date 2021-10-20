import React, { useState, } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const [error, setError] = useState('');

    const { processLogIn, handleEmailChange, handlePasswordChange } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    console.log(location.state?.from);

    const handleProcessLogIn = e =>{
        processLogIn(e)
        .then(result =>{
            const user = result.user;
            console.log(user);
            history.push(redirect_uri)
            
        })
        .catch(error =>{
            setError(error.message)
        })
        e.preventDefault();
    }
    return (
        <div className="contact">
            <h2>LogIn Now</h2>
            <div className="contact-form">
            <div className="contact-form-div">
           
            <form onSubmit={handleProcessLogIn}>
                <div>
                    <input onBlur={handleEmailChange} type="email" placeholder="Your Email" />
                </div>
                <div>
                    <input onBlur={handlePasswordChange} type="password" placeholder="Your PassWord" />
                </div>
                <div>
                    <input className="contact-form-btn" type="submit" value="Send" />
                </div>
                <p className="text-light">{error}</p>
            </form>

            </div>
            </div>
        </div>
    );
};

export default Login;