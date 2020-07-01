import React, {useEffect} from 'react'
import Layout from '../components/layout'
import {navigate } from 'gatsby'
import Profile from '../components/profile'
import {Router} from '@reach/router'
import RouteBase from '../components/route-base'
import RouteSecret from '../components/route-secret'
import RouteLogin from '../components/route-login'

const Dashboard = ( { location }) => {
    useEffect(() => {
        if (location.pathname.match(/^\/dashboard\/?$/)) {
            navigate('dashboard/login', {replace: true}) //replace the routing history to prevent loops
        }
    }, []); //any change on the elements on this array will dispatch the useEffect method

    return (
        <Layout>
            <Profile></Profile>
            <Router basepath="/dashboard">
                <RouteBase path="/base"/>
                <RouteSecret path="/secret" />
                <RouteLogin path="/login" />
            </Router>
            <p>TODO: create a dashboard</p>
        </Layout>
    );
};
export default Dashboard