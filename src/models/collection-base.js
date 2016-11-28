export class CollectionBase {
    items;

    constructor() {
        this.items = [];
    }

    dispose() {
        for(let item of this.items) {
            item.dispose();
        }

        this.items = null;
    }

    add() {
        throw new Error("collection must override add method");
    }

    remove(item) {
        const index = this.items.indexOf(item);
        this.removeAt(index);
    }

    removeAt(index) {
        this.items[index].dispose();
        return this.items.splice(index, 1); 
    }
}