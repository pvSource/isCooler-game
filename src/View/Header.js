import React from 'react';
import * as Commands from './../Controler/Commands.js'

export default class Gamefield extends React.Component {
    render() {
        return (
            <header className='header'>
                <div className='header__logo-box'>
                    <img src="/img/logo_main.jpeg" className="header__logo"></img>
                    
                </div>

                <div className="header__name">
                    <marquee scrollamount="4">isCooler</marquee>
                </div>

            </header>
        )
    }
}