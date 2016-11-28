export class CisParameters {
    items;

    constructor() {
        this.items = [];
    }

    dispose() {
        this.items.clear();    
        this.items = null;
    }

    add() {
        const newParameter = new CisParameter();
        this.items.push(newParameter);
        return newParameter;
    }

    remove(parameter) {
        const index = this.items.indexOf(parameter);
        this.removeAt(index);
    }

    removeAt(index) {
        return this.items.splice(index, 1); 
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