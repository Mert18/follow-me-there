import React, { Fragment } from 'react'

import Header from '../components/Navbar';
const Layout = ({children}) => {
    return (
        <Fragment>
            <Header />
            <div className='container'>
                {children}
            </div>
        </Fragment>
    )
}

export default Layout
