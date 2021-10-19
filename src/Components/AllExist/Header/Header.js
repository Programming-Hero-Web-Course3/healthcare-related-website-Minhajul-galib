import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../image/logo.png'
import demoIcon from '../../../image/demo-icon.png'
import './Header.css'
import Button from '@restart/ui/esm/Button';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const { user, logOut} = useAuth();

    return (
        <div className="header">
            <div className="top-bar d-flex">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="top-bar-details">
                    <ol className="d-flex">
                        <li>{user?.email}</li>
                        <li>{user.displayName} </li>
                        {user?.email && <Button onClick={logOut} className="btn btn-primary">LogOut</Button>}
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
                <Link to="/contact">CONTACT</Link>
                </div>
                <div>
                <Link to="/registration" style={{'padding': '11% 12%'}}>REGISTRATION</Link>
                </div>
                
                <div className="menubar-img">
                <img src={user?.photoURL || demoIcon } alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;