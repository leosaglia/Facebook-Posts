import React from 'react';
import userIcon from '../assets/icon.png';

function Header() {
    return (
        <header>
            <nav>
                <img src="https://i.imgur.com/KDIDiSE.png"/>
                <div className="profile">
                    <span>Meu Perfil</span>
                    <img src={userIcon} />
                </div>
            </nav>
        </header>
    )
}

export default Header;
