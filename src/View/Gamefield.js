import React from 'react';
import ReactDOM from 'react-dom';
import Cell from './Cell.js';

import * as Commands from './../Controler/Commands.js'

export default class Gamefield extends React.Component {

    constructor(props) {
        super(props);
        this.state = {field_front: this.getNullFieldFront(),
                        score: [0, 0],
                        current_player: 0,
                    };
        //console.log(this.state);
    }

    //Метод возвращает пустое(в null) поле 10*10
    getNullFieldFront() {
        let arr = new Array(10);
        for (let i = 0; i < 10; i++) {
            arr[i] = new Array(10).fill(null);
        }
        return arr;
    }

    render() {
        return (
            <main className="game">
                <div className="container game__container">
                    <section className="game__info">
                        <section className="game__current-player">
                            Игрок {this.state.current_player} ходит!
                        </section>
                        <section className="game__counter-box">
                            <div className="game__counter">
                                Игрок 0: {this.renderScore(0)} очков
                            </div>
                            <div className="game__counter">
                            Игрок 1: {this.renderScore(1)} очков
                            </div>
                        </section>
                    </section>


                    <section className="game__gamefield gamefield">
                        <div className="gamefield__row">
                            {this.renderCell(0, 0)}
                            {this.renderCell(0, 1)}
                            {this.renderCell(0, 2)}
                            {this.renderCell(0, 3)}
                            {this.renderCell(0, 4)}
                            {this.renderCell(0, 5)}
                            {this.renderCell(0, 6)}
                            {this.renderCell(0, 7)}
                            {this.renderCell(0, 8)}
                            {this.renderCell(0, 9)}
                        </div>
                        <div className="gamefield__row">
                            {this.renderCell(1, 0)}
                            {this.renderCell(1, 1)}
                            {this.renderCell(1, 2)}
                            {this.renderCell(1, 3)}
                            {this.renderCell(1, 4)}
                            {this.renderCell(1, 5)}
                            {this.renderCell(1, 6)}
                            {this.renderCell(1, 7)}
                            {this.renderCell(1, 8)}
                            {this.renderCell(1, 9)}
                        </div>
                        <div className="gamefield__row">
                            {this.renderCell(2, 0)}
                            {this.renderCell(2, 1)}
                            {this.renderCell(2, 2)}
                            {this.renderCell(2, 3)}
                            {this.renderCell(2, 4)}
                            {this.renderCell(2, 5)}
                            {this.renderCell(2, 6)}
                            {this.renderCell(2, 7)}
                            {this.renderCell(2, 8)}
                            {this.renderCell(2, 9)}
                        </div>
                        <div className="gamefield__row">
                            {this.renderCell(3, 0)}
                            {this.renderCell(3, 1)}
                            {this.renderCell(3, 2)}
                            {this.renderCell(3, 3)}
                            {this.renderCell(3, 4)}
                            {this.renderCell(3, 5)}
                            {this.renderCell(3, 6)}
                            {this.renderCell(3, 7)}
                            {this.renderCell(3, 8)}
                            {this.renderCell(3, 9)}
                        </div>

                        <div className="gamefield__row">                   
                            {this.renderCell(4, 0)}
                            {this.renderCell(4, 1)}
                            {this.renderCell(4, 2)}
                            {this.renderCell(4, 3)}
                            {this.renderCell(4, 4)}
                            {this.renderCell(4, 5)}
                            {this.renderCell(4, 6)}
                            {this.renderCell(4, 7)}
                            {this.renderCell(4, 8)}
                            {this.renderCell(4, 9)}                    
                        </div>

                        <div className="gamefield__row">
                            {this.renderCell(5, 0)}
                            {this.renderCell(5, 1)}
                            {this.renderCell(5, 2)}
                            {this.renderCell(5, 3)}
                            {this.renderCell(5, 4)}
                            {this.renderCell(5, 5)}
                            {this.renderCell(5, 6)}
                            {this.renderCell(5, 7)}
                            {this.renderCell(5, 8)}
                            {this.renderCell(5, 9)}                    
                        </div>
                        <div className="gamefield__row">
                            {this.renderCell(6, 0)}
                            {this.renderCell(6, 1)}
                            {this.renderCell(6, 2)}
                            {this.renderCell(6, 3)}
                            {this.renderCell(6, 4)}
                            {this.renderCell(6, 5)}
                            {this.renderCell(6, 6)}
                            {this.renderCell(6, 7)}
                            {this.renderCell(6, 8)}
                            {this.renderCell(6, 9)}
                        </div>
                        <div className="gamefield__row">
                            {this.renderCell(7, 0)}
                            {this.renderCell(7, 1)}
                            {this.renderCell(7, 2)}
                            {this.renderCell(7, 3)}
                            {this.renderCell(7, 4)}
                            {this.renderCell(7, 5)}
                            {this.renderCell(7, 6)}
                            {this.renderCell(7, 7)}
                            {this.renderCell(7, 8)}
                            {this.renderCell(7, 9)}                    
                        </div>
                        <div className="gamefield__row">
                            {this.renderCell(8, 0)}
                            {this.renderCell(8, 1)}
                            {this.renderCell(8, 2)}
                            {this.renderCell(8, 3)}
                            {this.renderCell(8, 4)}
                            {this.renderCell(8, 5)}
                            {this.renderCell(8, 6)}
                            {this.renderCell(8, 7)}
                            {this.renderCell(8, 8)}
                            {this.renderCell(8, 9)}
                        </div>
                        <div className="gamefield__row">
                            {this.renderCell(9, 0)}
                            {this.renderCell(9, 1)}
                            {this.renderCell(9, 2)}
                            {this.renderCell(9, 3)}
                            {this.renderCell(9, 4)}
                            {this.renderCell(9, 5)}
                            {this.renderCell(9, 6)}
                            {this.renderCell(9, 7)}
                            {this.renderCell(9, 8)}
                            {this.renderCell(9, 9)}
                        </div>    
                    </section>
                </div>

                <div className="header__load" onClick={() => Commands.save(this)}>
                    Сохраниться
                </div>
                <div className="header__save"
                    onClick={() => Commands.load(this)}>
                    Загрузиться
                </div>
            </main>
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
        );
    }

    renderScore(player_count) {
        return this.state.score[player_count];
    }

    whatIsIn(row, column) {
        //console.log('whatisin', this.state.field_front[row][column]);
        return this.state.field_front[row][column];
    }

    handleClick(row, column, isBomb = false) {
        console.log(`Произошёл клик по клетке row:${row} column:${column}`);

        //дэблклик
        if (this.whatIsIn(row, column)) {
            //alert(`Вы нажали по ранее открытой клетке`);
            return;
        }

        let current_cell_content = Commands.getRealCell(row, column);


        //Назначение очков и/или переопределение хода
        if (current_cell_content == 'empty' && !isBomb) {
            this.state.opened_cells++;
            //alert(`Вы промахнулись!\nСледующий игрок приготовьтесь\nИгрок ${Number(!Boolean(this.state.current_player))}`);
            this.state.current_player = Number(!Boolean(this.state.current_player));
        } else {
            if (current_cell_content == "ship") {
                this.state.score[this.state.current_player]++;
                this.state.opened_cells++;
            } else if (current_cell_content == "x2") {
                this.state.score[this.state.current_player] = this.state.score[this.state.current_player]*2;
                this.state.opened_cells++;
            } else if (current_cell_content == "bomb") {
                this.state.opened_cells++;
                for (let i = row - 1; i <= row + 1; i++) {
                    for (let j = column - 1; j <= column + 1; j++) {
                        if (i >= 0 && i < 10 && j >=0 && j < 10 && !(i == row && column == j)) {
                            this.handleClick(i, j, true);
                        }
                    }
                }
            }
        }


        // if (current_cell_content == "ship") {
        //     if (this.state.is_current_player_first) {
        //         this.state.score_1++;
        //     } else {
        //         this.state.score_0++;
        //     }
        // } else  else if (current_cell_content == 'x2') {
        //     this.state.is_current_player_first = this.state.is_current_player_first;
        // }

        //Переписываем стэйт для перерендера
        let new_field_front = this.state.field_front.slice();
        new_field_front[row][column] = current_cell_content;
        this.setState({ ...this.state, field_front: new_field_front});

        let opened_cells = 0;
        for(let i = 0; i < 10; i++) {
            for(let j = 0; j < 10; j++) {
                if (this.state.field_front[i][j]) {
                    opened_cells++;
                }
            }
        }
        console.log(opened_cells);
        if (opened_cells == 100) {
            let winner = (this.state.score[0] > this.state.score[1] ? 'Победил 0 игрок' : this.state.score[0] < this.state.score[1] ? 'Победил 1 игрок' : 'Ничья');
            alert(winner);
        }        
    }

    copy() { //???
        let copy_state = {...this.state};
        return copy_state;
    }
}