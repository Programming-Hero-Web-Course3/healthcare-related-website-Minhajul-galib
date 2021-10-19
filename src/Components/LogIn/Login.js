import React from 'react';

const Login = () => {
    return (
        <div className="contact">
            <h2>LogIn Now</h2>
            <div className="contact-form">
            <div className="contact-form-div">
            <form action="">
                <div>
                    <input type="email" placeholder="Your Email" />
                </div>
                <div>
                    <input type="password" placeholder="Your PassWord" />
                </div>
                <div>
                    <input className="contact-form-btn" type="submit" value="Send" />
                </div>
            </form>
            </div>
            </div>
        </div>
    );
};

export default Login;