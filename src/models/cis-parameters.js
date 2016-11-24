export class CisParameters {
    items;

    constructor() {
        this.items = [];
    }

    add() {
        const newParameter = new CisParameter();
        this.items.push(newParameter);
        return newParameter;
    }

    remove(parameter) {
        // 1. Get index of item using indexOf e.g. this.items.indexOf(myParameter);
        // 2. call this.removeAt with that index
        //const pos = this.items.indexof(parametyer)
    }

    removeAt(index) {
        // splice the array
        var removedItem = this.items.splice(index, 1); 
    }
}

export class  CisParameter {
    value;
    showOnReport;

    constructor() {
        this.value = "";
        this.showOnReport = true;
    }
}   