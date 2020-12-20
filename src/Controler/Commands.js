import game_field from './../Model/GameFieldReal.js';
import GameField from './../View/Gamefield.js';

export function getRealCell(row, column) {
    return game_field.getRealCellContent(row,column);
}

export function save(view) {
    let real_game_field = game_field.copy();
    let view_game_field = view.copy();
    let game = {view: view_game_field, real: real_game_field};
    var game_json = JSON.stringify(game);
}
