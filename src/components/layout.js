import React from 'react'
import PropTypes from 'prop-types'

import 'bootstrap/dist/css/bootstrap.css'
import './fonts.css'
import './theme.css'
import './layout.css'
import './spacing.css'

import Navbar from './nav-bar'
import Footer from './footer'

/* eslint-disable */

const Layout = ({ children }) => {
    return (
        <>
            <div className="container-fluid px-0 mt-2">
                <Navbar />
                <main>{children}</main>
                <Footer />
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
