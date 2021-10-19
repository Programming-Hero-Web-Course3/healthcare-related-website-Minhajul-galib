import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="notFound">
            <h1>404</h1>
            <p>Please! click here and go to <Link to="/">Home Page</Link></p>
        </div>
    );
};

export default NotFound;