import React from 'react';
import {navigate} from 'gatsby'
import { useIdentityContext } from 'react-netlify-identity'

const PrivateRoute = ( {component: Component, location, ...rest} ) => {
    const identity = useIdentityContext();
    const isLoggedIn = identity && identity.isLoggedIn;

    if(!isLoggedIn && location.pathname !== '/dashboard/login') {
        navigate('/dashboard/login', {replace: true});
        return null; //safe check to prevent the page from showing anything before auth
    }

    //if we pass the check, that means we're logged in.
    return <Component {...rest} /> //render the Component and assing the "rest" of the props
}
export default PrivateRoute