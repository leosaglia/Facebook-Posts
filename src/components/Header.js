import React from 'react';
import userIcon from '../assets/icon.png';
import faceLogo from '../assets/facebook-logo.png';

function Header() {
    return (
        <header>
            <img src={faceLogo} width="150px"/>
            <div className="meuPefil">
                <h1>Meu Perfil</h1>
                <img src={userIcon} width="22px" height="22px"/>
            </div>
        </header>
    )
}

export default Header;
