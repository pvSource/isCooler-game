import React from 'react';

export default class Gamefield extends React.Component {
    render() {
        return (
            <header className='header'>
                <div className='header__logo-box'>
                    <img src="https://i.ibb.co/qBcMHbT/logo-main.jpg" className="header__logo"></img>
                    
                </div>

                <div className="header__load">
                    Загрузиться
                </div>
                <div className="header__save">
                    Сохраниться
                </div>

            </header>
        )
    }
}