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
                <img className="cell__image cell__image_question" src="/img/question.png"></img>
            )
        } else if (content == "ship") {
            return (
                <img className="cell__image cell__image_ship" src="/img/ship.png"></img>
            )
        } else if (content == "empty") {
            return (
                <img className="cell__image cell__image_sea" src="/img/sea.png"></img>
            )
        } else if (content == "x2") {
            return (
                <img className="cell__image cell__image_x2" src="/img/x2.png"></img>
            )
        } else if (content == "bomb") {
            return (
                <img className="cell__image cell__image_bomb" src="/img/bomb.png"></img>
            )
        }
    }
    


}