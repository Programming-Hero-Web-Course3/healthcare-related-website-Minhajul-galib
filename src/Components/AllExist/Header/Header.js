import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../image/logo.png'
import demoIcon from '../../../image/register.png'
import './Header.css'
import useAuth from '../../../Hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    let headerShowBtn = '';
    const { user, logOut} = useAuth();
    if(user?.email){
        headerShowBtn = <Link onClick={logOut} className="btn btn-success">LogOut</Link>
    }else{
        headerShowBtn = <Link to="/registration" className="btn btn-primary" >LogIn</Link>
    }
    return (
        <div className="header">
            <div className="top-bar d-flex">
                <div className="logo">
                    <Link to="/"><img src={logo} alt="" /></Link>
                </div>
                <div className="top-bar-details">
                    <ol className="d-flex">
                        <li>{user?.email}</li>
                        <li>{user.displayName} </li>
                        {headerShowBtn}
                    </ol>
                </div>
            </div>
            <div className="menu-bar d-flex justify-content-between align-items-center">
                <div>
                <Link to="/home">HOME</Link>
                </div>
                <div> 
                <Link to="/about">ABOUT</Link>
                </div>
                <div>
                <HashLink smooth to="/home#services">SERVICES</HashLink>
                </div>
                <div>
                <Link to="/contact">CONTACT</Link>
                </div>
                
                <div className="menubar-img">
                <Link to="/dashboard"><img src={user?.photoURL || demoIcon } alt="" /></Link>
                </div>
            </div>
        </div>
    );
};

export default Header;