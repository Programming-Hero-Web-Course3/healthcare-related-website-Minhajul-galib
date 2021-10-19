import React, { useState } from 'react';
import './Registration.css';
import register from '../../image/register.png';
import useAuth from '../../Hooks/useAuth';

const Registration = () => {
    const { user, signInWithGoogle, signInUsingGithub, handleEmailChange, handlePasswordChange, handleRegistration } = useAuth();
    

    
    return (
        <div className="contact">
            <h2>{user?.email  || 'Registration'}</h2>
            <div className="registration-form-div-main d-flex">
                   
                    <div className="registration-form">
                    <img src={register} alt="" /><br />
                    <button onClick={signInWithGoogle} className="signIn-btn">SignUp With Google</button><br />
                    <button onClick={signInUsingGithub} className="signIn-btn">SignUP With Github</button><br />
                    </div>
                    <div className="registration-form-div">
                     
                    <form onSubmit={handleRegistration}>
                    <div>
                        <input onBlur={handleEmailChange} type="email" placeholder="Your Email" required />
                    </div>
                    <div>
                        <input onBlur={handlePasswordChange} type="password" placeholder="Your Password" required />
                    </div>
                    <div>
                        <input className="contact-form-btn" type="submit" value="Register" />
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;