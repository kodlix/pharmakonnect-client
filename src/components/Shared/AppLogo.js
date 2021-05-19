import React from 'react';
import { Link } from 'react-router-dom';

const AppLogo = () => {
    return (
        <Link className="navbar-brand" to="/">
            <img src="assets/img/logo.png" alt="logo" />
        </Link>
    );
}

export default AppLogo;