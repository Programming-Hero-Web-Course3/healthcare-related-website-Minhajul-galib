import React, { useState, } from 'react';
import './Registration.css';
import register from '../../image/register.png';
import useAuth from '../../Hooks/useAuth';
import { Link, useLocation, useHistory } from 'react-router-dom';

const Registration = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const { signInWithGoogle, signInUsingGithub, handleEmailChange, handlePasswordChange, handleRegistration } = useAuth();
    
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    console.log(location.state?.from);

    const handleGoogleLogin = () =>{

        signInWithGoogle()
        .then(result =>{
            console.log(result.user);
            setUser(result.user)
            history.push(redirect_uri);
        })
        .catch(error =>{
            setError(error.message);
        })
    } 
    
    const handleGithubLogin = () =>{
        signInUsingGithub()
        .then(result =>{
            setUser(result.user);
            history.push(redirect_uri)
        })
        .catch(error =>{
            setError(error.message)
        })
    }

    const redirectHandleRegistration = e =>{
        handleRegistration(e)
        .then(result =>{
            const user = result.user;
            console.log(user);
            history.push(redirect_uri)
        })
        e.preventDefault();
    }
    

    return (
        <div className="contact">
            <h2>{user?.email  || 'Registration'}</h2>
            <div className="registration-form-div-main d-flex">
                   
                    <div className="registration-form">
                    <img src={register} alt="" /><br />
                    <button onClick={handleGoogleLogin} className="signIn-btn"><i class="fab fa-google"></i> SignUp With Google</button><br />
                    <button onClick={handleGithubLogin} className="signIn-btn"><i class="fab fa-github"></i> SignUP With Github</button><br />
                    </div>
                    <div className="registration-form-div">
                     
                    <form onSubmit={redirectHandleRegistration}>
                    <div>
                        <input id="registration-input" onBlur={handleEmailChange} type="email" placeholder="Your Email" required />
                    </div>
                    <div>
                        <input id="registration-input" onBlur={handlePasswordChange} type="password" placeholder="Your Password" required />
                    </div>
                    <div>
                        <input className="contact-form-btn" type="submit" value="Register" />
                    </div>
                    <div>
                        <p className="text-light pt-4">All ready exist? <Link to="/login">Login</Link></p>
                    </div>
                        <p>{error}</p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Registration;