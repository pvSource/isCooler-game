class SnapshotStorage {
    constructor() {
        this.snapshots = [];
    }

    addSnapshot(new_snap) {
        this.snapshots.push(new_snap);
        console.log(this.snapshots);
    }

    // deleteSnapshotByIndex(index: number) {
    //     this.snapshots.splice(index, 1);
    // }

    getLastSnapshot() {
        return this.snapshots[this.snapshots.length - 1];
    }

    // getSnapshotByIndex(index: number): SnapshotMemento {
    //     return this.snapshots[index];
    // }

    // getSnapshotStorageLength(): number {
    //     return this.snapshots.length;
    // }
}

var snapshot_storage = new SnapshotStorage();
export default snapshot_storage;