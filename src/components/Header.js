import React from 'react'
import logo from '../img/logo.svg';

const Header = () => {
    return (
        <div className="logo__container">
            <a href="/"> <img className="logo" src={logo} alt="logo" /></a>
        </div>
    )
}

export default Header
