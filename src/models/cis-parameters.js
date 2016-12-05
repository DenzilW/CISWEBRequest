import {ReportBase} from './report-base';
import {CollectionBase} from './collection-base';
import {parameterEmailTemplate} from './templates';
import {parameterHeader} from './templates';

export class CisParameters extends CollectionBase {
    add() {
        const newParameter = new CisParameter();
        this.items.push(newParameter);
        return newParameter;
    }

    saveToEmail() {
        let email = "";
        let count = this.items.length;
        if (count > 0)
        {
            email =  parameterHeader
        }
        for(let param of this.items) {
            email += param.saveToEmail();
        }
        return email;
    }
}

export class CisParameter {
    value = null;
    showOnReport = null;

    constructor() {
        this.value = "";
        this.showOnReport = true;
    }

    dispose() {
        this.value = null;
        this.showOnReport = null;
    }

    saveToEmail() {
        return parameterEmailTemplate
            .replace("{prameter}", this.value)
            .replace("{showOnReport}", this.showOnReport)
    }
}   