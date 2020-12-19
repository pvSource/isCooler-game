import React from 'react';
import ReactDOM from 'react-dom';
//import './Cell.css';

export default class Cell extends React.Component {
    render() {
        return (
            <button
                className="cell"
                onClick={this.props.onClick}
                //onmouseover={() => this.handleMouseOver()}
            >
                {this.getCellInButtonJSX(this.props.content)}
            </button>
        )
    }

    //handleMouseOver() {

    //}

    /*getCellJSX(row, column, content) {
        if (!content) { 
            return ( //с точки зрения вёрстки, уг, но потом обязательно перепишу. !!УБЕДИТЬСЯ, ЧТО Я КОРРЕКТНО ПИШУ, ИБО JSX != HTML
                <p>
                    <strong>{row}</strong>_<em>{column}</em>
                </p>
            )
        } else {
            //заглушка, потому что пока такого быть не может, смотреть в renderCell и whatIsIn внутри GameField
            return;
        }
    }*/

    getCellInButtonJSX(content) {
        if (content == null) {
            return (
                <p className = 'cell__text'>
                    ?
                </p>
            )
        } else if (content == "ship") {
            return (
                <p className = 'cell__text'>
                    ship
                </p>
            )
        } else if (content == "empty") {
            return (
                <p className = 'cell__text'>
                    empty
                </p>
            )
        } else if (content == "x2") {
            return (
                <p className = 'cell__text'>
                    x2
                </p>
            )
        } else if (content == "bomb") {
            return (
                <p className = 'cell__text'>
                    bomb
                </p>
            )
        }
    }
    


}