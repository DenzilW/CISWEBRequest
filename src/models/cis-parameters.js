// @flow

import {ReportBase} from './report-base';
import {CollectionBase} from './collection-base';
import {parameterEmailTemplate} from './templates';
import {parameterHeader} from './templates';

export class CisParameters extends CollectionBase {
    add() {
        const newParameter = new CisParameter();
        this.items.push(newParameter);

        const interval = setInterval(function() {
            const rows = Array.prototype.slice.call(document.querySelectorAll('[data-type="parameter"]'));

            if (rows.length == this.items.length) {
                clearInterval(interval);

                const focusItem = rows[rows.length -1].children[0].children[0];
                focusItem.focus();
            }
        }.bind(this), 100);

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
    value: string;
    showOnReport: boolean;
    onkeyField: string;

    constructor() {
        this.value = "";
        this.onkeyField = "";
        this.showOnReport = true;
    }

    saveToEmail() {
        return parameterEmailTemplate
            .replace("{prameter}", this.value)
            .replace("{onkeyField}", this.onkeyField)
            .replace("{showOnReport}", this.showOnReport)
    }
   
}   