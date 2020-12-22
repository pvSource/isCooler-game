import Memento from "./Memento";
import MementoReal from "./MementoReal";
import * as Commands from './../Controler/Commands.js'

class GameFieldReal {
    constructor() {
        this.field = [undefined]; //Это всё временные решения
        this.createEmptyField(); //потому что иначе не включается
        this.createField();
        //this.players_score = [0, 0]; //Поле будет хранить в себе, кто ходит и количество очков
        //this.current_player = 0; 
        console.log("Поле(модель) создано");
    }

    createEmptyField() {
        for(let i = 0; i < 10; i++) {
            this.field[i] = new Array(10);
            for(let j = 0; j < 10; j++) {
                this.field[i][j] = {content: 'empty', isOpen: false};
            }
        }
        console.log("Создано пустое поле (отладка ненужного метода без которого не работает createField())"); //
    }

    createField() {
        for(let i = 0; i < 10; i++) {
            for(let j = 0; j < 10; j++) {
                let rand = Math.random();
                if (rand < 0.1) {
                    this.field[i][j].content = 'x2';
                } else if (rand < 0.5) {
                    this.field[i][j].content = "ship";
                } else {
                    this.field[i][j].content = 'empty';
                }
                this.field[i][j].isOpen = false;
            }
            
        }
        let bomb_row = Math.round((Math.random()*10));
            let bomb_column = Math.round((Math.random()*10));
            console.log("Бомба", bomb_row, bomb_column);
            this.field[bomb_row][bomb_column].content = "bomb";
        console.log('Поле создано (отладка)'); //отладка
    }

    printRealField(){    //эдакий хак)
        for(let i = 0; i < 10; i++) {
            for(let j = 0; j < 10; j++) {
                process.stdout.write(`${this.field[i][j].content} `);
            }
            process.stdout.write("\n\n");
        }
        console.log("Поле выведено в реале (отладка)"); //отладка
    }

    getRealCellContent(row, column) {
        return (this.field[row][column].content);
    }

    copy() {
        let copy_field = new GameFieldReal();
        copy_field.field = this.field;
        return copy_field;
    }

    createMemento(view_state) {
        let game_state = {real: this.copy(), view: view_state};
        return new MementoReal(game_state);
    }

    //getMementoView(snapshot)
    
    restoreMemento(snapshot) {
        this.field = snapshot.game_state.real.copy().field;
        //return snapshot.view.copy();
        //Commands.setViewState(snapshot.view.copy());        
    }
}

var game_field = new GameFieldReal();
export default game_field;