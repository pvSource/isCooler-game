import Memento from "./Memento";


export default class MementoReal extends Memento {
    constructor(game_state) {
        super();
        this.game_state = game_state;
        //console.log(game_state); Все вроде ок здесь
    }
}