import React, { useState } from 'react';
import './style.css'
const Header = () => {

    const [visitor, setVisitor] = useState('Login');

    const authenticateVisitor = () => {
        let userName = prompt('Qual o seu nome?');
        let user = {
            name: userName,
        }
        return setVisitor(`${user.name}`)
    }

    return (
        <header className="header">
            <h1 className="header-title">Header</h1>
            <nav className="header-nav">
                <ul className="header-nav-ul">
                    <li className="header-nav-ul-li">
                        <a href="#top" title="Home">Home</a>
                    </li>
                    <li className="header-nav-ul-li">
                        <a href="#top" title="Sobre">Sobre</a>
                    </li>
                    <li className="header-nav-ul-li">
                        <a href="#top" title="Serviços">Serviços</a>
                    </li>
                    <li className="header-nav-ul-li">
                        <a href="#top" title="Contatos">Contatos</a>
                    </li>
                </ul>
            </nav>
                <button>
                    Visitor
                </button>
        </header>
    )
}

export default Header;