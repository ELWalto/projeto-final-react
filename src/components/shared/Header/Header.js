// import './Header.scss'
// import React from 'react'
// import NavMenu from '../../structure/NavMenu/NavMenu'

// const Header = () => {
//     return (
//         <header>
//             <img src="https://bloximages.chicago2.vip.townnews.com/pinalcentral.com/content/tncms/assets/v3/editorial/e/24/e24916cc-b8de-5c48-9fe7-94b44dc646c2/59c9913f22bda.image.gif" />
//             <NavMenu />
//         </header>
//     )
// }


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { JwtHandler } from "../../../jwt-handler/jwt-handler";

import "./Header.css";

export default function Header() {
    const [isLogged, setIsLogged] = useState(JwtHandler.isJwtValid);

    useEffect(() => {
        const handleOnJwtChange = () => {
            setIsLogged(JwtHandler.isJwtValid());
        };

        window.addEventListener("onJwtChange", handleOnJwtChange);

        // Função de limpeza
        return () => {
            window.removeEventListener("onJwtChange", handleOnJwtChange);
        };
    }, []);

    return (
        <header className="header">
            <Link to="/">
                <img
                    className="header__logo"
                    src="https://bloximages.chicago2.vip.townnews.com/pinalcentral.com/content/tncms/assets/v3/editorial/e/24/e24916cc-b8de-5c48-9fe7-94b44dc646c2/59c9913f22bda.image.gif"
                    alt="Xbox Logo"
                />
            </Link>
            <br />
            <Link to="/">Home</Link>
            <br />
            <Link to="/game/new">New Game</Link>
            <br />
            {isLogged ? (
                <Link to="/logout">Logout</Link>
            ) : (
                <Link to="/login">Login</Link>
            )}
            <br />
            <br />
        </header>
    );
}