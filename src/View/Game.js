import React from 'react';
import ReactDOM from 'react-dom';
import Gamefield from './Gamefield.js'

export default class Game extends React.Component {
    render() {
        return ( // пришлось выпилить все остальные элементы до их реализации
            <div>
                <Gamefield />
            </div>
        )
    }
}