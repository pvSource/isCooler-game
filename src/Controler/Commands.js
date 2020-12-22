import snapshot_storage from '../Model/SnapshotStorage.js';
import game_field from './../Model/GameFieldReal.js';
import GameField from './../View/Gamefield.js';

export function getRealCell(row, column) {
    return game_field.getRealCellContent(row,column);
}

export function save(view) {
    // let real_game_field = game_field.copy();
    let view_game_field = view.copy();
    snapshot_storage.addSnapshot(game_field.createMemento(view_game_field));

    // let game = {view: view_game_field, real: real_game_field};
    // var game_json = JSON.stringify(game);
}

export function load(view) {
    console.log("view", view);
    let load_snap = snapshot_storage.getLastSnapshot();
    console.log(load_snap.game_state.view);
    let new_view_state = Object.assign({}, load_snap.game_state.view);
    view.setState(new_view_state); //???

    game_field.restoreMemento(load_snap);
//реализовать!!!

}
