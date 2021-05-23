import React from 'react';
import Header from '../header';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <div>
                <main>{ children }</main>
            </div>
        </React.Fragment>
    );
};

export default Layout;