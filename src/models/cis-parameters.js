import {CollectionBase} from './collection-base';

export class CisParameters extends CollectionBase {
    add() {
        const newParameter = new CisParameter();
        this.items.push(newParameter);
        return newParameter;
    }
}

export class CisParameter {
    value;
    showOnReport;

    constructor() {
        this.value = "";
        this.showOnReport = true;
    }

    dispose() {
        this.value = null;
        this.showOnReport = null;
    }
}   