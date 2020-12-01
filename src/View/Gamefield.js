import React from 'react';
import ReactDOM from 'react-dom';
import Cell from './Cell.js';

export default class Gamefield extends React.Component {

    constructor(props) {
        super(props);
        this.field_front = this.getNullFieldFront();
    }

    getNullFieldFront() {
        let arr = new Array(10);
        for (let i = 0; i < 10; i++) {
            arr.i = new Array(10).fill(null);
        }
        return arr;
    }

    render() {
        return (
            <div>
                <div className="Gamefield__row">
                    {this.renderCell(1, 1)}
                    {this.renderCell(1, 2)}
                    {this.renderCell(1, 3)}
                    {this.renderCell(1, 4)}
                    {this.renderCell(1, 5)}
                    {this.renderCell(1, 6)}
                    {this.renderCell(1, 7)}
                    {this.renderCell(1, 8)}
                    {this.renderCell(1, 9)}
                    {this.renderCell(1, 10)}
                </div>

                <div className="Gamefield__row">
                    {this.renderCell(2, 1)}
                    {this.renderCell(2, 2)}
                    {this.renderCell(2, 3)}
                    {this.renderCell(2, 4)}
                    {this.renderCell(2, 5)}
                    {this.renderCell(2, 6)}
                    {this.renderCell(2, 7)}
                    {this.renderCell(2, 8)}
                    {this.renderCell(2, 9)}
                    {this.renderCell(2, 10)}
                </div>

                <div className="Gamefield__row">
                    {this.renderCell(3, 1)}
                    {this.renderCell(3, 2)}
                    {this.renderCell(3, 3)}
                    {this.renderCell(3, 4)}
                    {this.renderCell(3, 5)}
                    {this.renderCell(3, 6)}
                    {this.renderCell(3, 7)}
                    {this.renderCell(3, 8)}
                    {this.renderCell(3, 9)}
                    {this.renderCell(3, 10)}
                </div>

                <div className="Gamefield__row">
                    {this.renderCell(4, 1)}
                    {this.renderCell(4, 2)}
                    {this.renderCell(4, 3)}
                    {this.renderCell(4, 4)}
                    {this.renderCell(4, 5)}
                    {this.renderCell(4, 6)}
                    {this.renderCell(4, 7)}
                    {this.renderCell(4, 8)}
                    {this.renderCell(4, 9)}
                    {this.renderCell(4, 10)}
                </div>

                <div className="Gamefield__row">
                    {this.renderCell(5, 1)}
                    {this.renderCell(5, 2)}
                    {this.renderCell(5, 3)}
                    {this.renderCell(5, 4)}
                    {this.renderCell(5, 5)}
                    {this.renderCell(5, 6)}
                    {this.renderCell(5, 7)}
                    {this.renderCell(5, 8)}
                    {this.renderCell(5, 9)}
                    {this.renderCell(5, 10)}
                </div>

                <div className="Gamefield__row">
                    {this.renderCell(6, 1)}
                    {this.renderCell(6, 2)}
                    {this.renderCell(6, 3)}
                    {this.renderCell(6, 4)}
                    {this.renderCell(6, 5)}
                    {this.renderCell(6, 6)}
                    {this.renderCell(6, 7)}
                    {this.renderCell(6, 8)}
                    {this.renderCell(6, 9)}
                    {this.renderCell(6, 10)}
                </div>

                <div className="Gamefield__row">
                    {this.renderCell(7, 1)}
                    {this.renderCell(7, 2)}
                    {this.renderCell(7, 3)}
                    {this.renderCell(7, 4)}
                    {this.renderCell(7, 5)}
                    {this.renderCell(7, 6)}
                    {this.renderCell(7, 7)}
                    {this.renderCell(7, 8)}
                    {this.renderCell(7, 9)}
                    {this.renderCell(7, 10)}
                </div>

                <div className="Gamefield__row">
                    {this.renderCell(8, 1)}
                    {this.renderCell(8, 2)}
                    {this.renderCell(8, 3)}
                    {this.renderCell(8, 4)}
                    {this.renderCell(8, 5)}
                    {this.renderCell(8, 6)}
                    {this.renderCell(8, 7)}
                    {this.renderCell(8, 8)}
                    {this.renderCell(8, 9)}
                    {this.renderCell(8, 10)}
                </div>

                <div className="Gamefield__row">
                    {this.renderCell(9, 1)}
                    {this.renderCell(9, 2)}
                    {this.renderCell(9, 3)}
                    {this.renderCell(9, 4)}
                    {this.renderCell(9, 5)}
                    {this.renderCell(9, 6)}
                    {this.renderCell(9, 7)}
                    {this.renderCell(9, 8)}
                    {this.renderCell(9, 9)}
                    {this.renderCell(9, 10)}
                </div>

                <div className="Gamefield__row">
                    {this.renderCell(10, 1)}
                    {this.renderCell(10, 2)}
                    {this.renderCell(10, 3)}
                    {this.renderCell(10, 4)}
                    {this.renderCell(10, 5)}
                    {this.renderCell(10, 6)}
                    {this.renderCell(10, 7)}
                    {this.renderCell(10, 8)}
                    {this.renderCell(10, 9)}
                    {this.renderCell(10, 10)}
                </div>
            </div>
        )
    }

    renderCell(row, column) {
        return (
            <Cell
                row={row}
                column={column}
                content={this.whatIsIn(row, column)}
                onClick={() => this.handleClick(row, column)}
            />

            /* <button 
            className="cell"
            value={this.state.cells[row][column]}
            onClick={() => this.handleClick(row, column)}
            content={this.whatIsIn(row, column)}
            >

            </button>  */
        );
    }

    whatIsIn(row, column) {
        return this.field_front[row, column];
    }

    handleClick(row, column) {
        //заглушка, просто выводит alert
        alert(`Произошёл клик по клетке row:${row} column:${column}`);
        if (this.whatIsIn(row, column)) {
            alert(`Вы нажали по ранее открытой клетке`);
            return;
        }
        
    }
}