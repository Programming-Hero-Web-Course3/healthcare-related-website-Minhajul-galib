import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({children, ...rest }) => {

    const {user, isLoading} = useAuth();
    // let checkUrl;
    // const checkUser = () =>{
    //     if(localStorage.getItem('loggedInUser')){
    //         return checkUrl = '/registration';
    //     }
    //     else{
    //         return checkUrl = '/home';
    //     }
    // }
    if(isLoading){
        return <h2>wait...</h2>
    }else{
    
    return (
        <Route
            {...rest}
            render = {({ location })=> user.email ? children : <Redirect
                                                                        to={{
                                                                            pathname: '/registration',
                                                                            state: { from: location }
                                                                        }}
                                                                        ></Redirect>}
        >

        </Route>
    );
                                                                    }
};

export default PrivateRoute;