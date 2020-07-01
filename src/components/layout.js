import React from 'react';
import { Link } from 'gatsby';

import './layout.css';
import { IdentityContextProvider } from 'react-netlify-identity-widget';

const Layout = ({ children }) => (
    <IdentityContextProvider url="https://fedes-jamstack-intro-auth.netlify.app"> 
    {/* I should've created a new netlify site with all of the auth things enabled but hell I don't want to create another repo and set it up */}
    <header>
        <Link to="/">JAMstack App</Link>
    </header>
    <main> {children} </main>
    </IdentityContextProvider>
);
export default Layout