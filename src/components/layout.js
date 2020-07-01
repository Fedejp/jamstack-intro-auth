import React from 'react';
import { Link } from 'gatsby';

import './layout.css';
import { IdentityContextProvider } from 'react-netlify-identity-widget';
import 'react-netlify-identity-widget/styles.css';

const Layout = ({ children }) => (
    <IdentityContextProvider url="https://fedes-jamstack-intro-auth.netlify.app"> 
    <header>
        <Link to="/">JAMstack App</Link>
    </header>
    <main> {children} </main>
    </IdentityContextProvider>
);
export default Layout