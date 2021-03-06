import React from 'react';
import { Link } from 'gatsby';
import { useIdentityContext } from 'react-netlify-identity'

const Profile = ({ showModal }) => { 
    const identity = useIdentityContext();
    const isLoggedIn = identity && identity.isLoggedIn;

    const name = 
        identity &&
        identity.user &&
        identity.user.user_metadata &&
        identity.user.user_metadata.full_name
    console.log(identity)
    return isLoggedIn && (
        <div className="dashboard-header">
            <nav>
                <Link to="dashboard/secret"
                activeClassName = "active">
                    Secret Stuff
                </Link>
                <Link to="dashboard/base"
                activeClassName = "active">
                    See your Base
                </Link>
            </nav>
            <span> Logged in as {name} <button onClick= {showModal}>Log Out</button></span>
        </div>
    )
}
export default Profile;