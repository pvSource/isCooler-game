import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './View/Game.js';
import './View/Cell.css';
import './View/css/header.css';
import './View/css/main.css';
import './View/css/game.css';
import './View/css/footer.css';

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);