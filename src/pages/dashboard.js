import React, {useEffect, useState} from 'react'
import Layout from '../components/layout'
import {navigate } from 'gatsby' 
import IdentityModal from 'react-netlify-identity-widget'
import Profile from '../components/profile'
import { Router } from '@reach/router'
import RouteBase from '../components/route-base'
import RouteSecret from '../components/route-secret'
import RouteLogin from '../components/route-login'
import PrivateRoute from '../components/private-route'

import 'react-netlify-identity-widget/styles.css'

const Dashboard = ( { location }) => {
    const [isVisible, setVisibility] = useState(false)

    useEffect(() => {
        if (location.pathname.match(/^\/dashboard\/?$/)) {
            navigate('dashboard/login', {replace: true}) //replace the routing history to prevent loops
        }
    }, [location.pathname]); //any change on the elements on this array will dispatch the useEffect method

    const showModal = () => setVisibility(true)
    return (
        <Layout>
            <Profile showModal= {showModal}></Profile>
            <Router basepath="/dashboard">
                <PrivateRoute path="/base" component= {RouteBase}/>
                <PrivateRoute path="/secret" component={RouteSecret}/>
                <RouteLogin path="/login" showModal= {showModal} />
            </Router>
            <IdentityModal
                showDialog={isVisible}
                onCloseDialog={() => setVisibility(false)}>

            </IdentityModal>
            <p>TODO: create a dashboard</p>
        </Layout>
    );
};
export default Dashboard