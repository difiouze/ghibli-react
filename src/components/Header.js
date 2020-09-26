import React from 'react'
import logo from '../img/logo.svg';

const Header = () => {
    return (
        <div className="logo__container">
            <img className="logo" src={logo} alt="logo" />
        </div>
    )
}

export default Header
