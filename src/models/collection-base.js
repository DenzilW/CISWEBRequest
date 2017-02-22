export class CollectionBase {
    items;
    selectedItem;

    constructor() {
        this.items = [];
    }

    dispose() {
        for(let item of this.items) {
            if (typeof item.dispose == "function") {
                item.dispose();
            }
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
        if (typeof this.items[index].dispose ===  "function"){
            this.items[index].dispose
        }

        return this.items.splice(index, 1); 
    }

    selectItem(item) {
        if (this.selectedItem) {
            this.selectedItem.isSelected = false;
        }

        item.isSelected = true;
        this.selectedItem = item;
    }
}