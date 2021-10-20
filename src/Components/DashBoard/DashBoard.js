import React from 'react';
import './DashBoard.css'
import useAuth from '../../../src/Hooks/useAuth';

const DashBoard = () => {
    const { user } = useAuth();
    console.log(user);
    let verified;
    if(user?.emailVerified){
        verified = 'Verified Email';
    }
    else{
        verified = 'Email is no verified';
    }
    return (
        <div className="dashboard">
            <div className="dashboard-div">
            <img src={user?.photoURL} alt="" />
            <h5>{user?.displayName}</h5>
            <p>Your Email: {user?.email}</p>
            <p>Your Phone Number: {user?.phoneNumber}</p>
            <p>Emil status: {verified}</p>
            </div>
        </div>
    );
};

export default DashBoard;