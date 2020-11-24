import React from 'react';
import ReactDOM from 'react-dom';

export default class Cell extends React.Component {
    render() {
        return (
            <button
                className="cell"
                onClick={this.props.onClick}
            >
                {this.getCellJSX(this.props.row, this.props.column, this.props.content)}
            </button>
        )
    }

    getCellJSX(row, column, content) {
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
    }


}