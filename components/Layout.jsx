import React from 'react';
import { Header } from './';

// whenever Layout is rendered, Header will always be fixed. the Children component will be varying content

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};

export default Layout;
