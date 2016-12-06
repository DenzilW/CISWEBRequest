/*
    Denzil Williams:
    Model for holding  the report data
    
    temp chanage for branch
*/

// @flow

import {ReportBase} from './report-base';
import {CollectionBase} from './collection-base';
import {reportDataEmailTemplate} from './templates';

export class CisReportData extends ReportBase {
    reportDataTitle: string;
    reportIncludeTotals: boolean;
    additionalReportData: string;
    dataGroupings = CisReportDataGroupingCollection;
    onKeyFields = CisReportDataOnKeyFieldsCollection;

    constructor() {
        super();
        this.dataGroupings = new CisReportDataGroupingCollection();
        this.onKeyFields = new CisReportDataOnKeyFieldsCollection();
    }

    dispose() {
        this.dataGroupings.dispose();
        this.onKeyFields.dispose();
    }

       saveToEmail() {
        return reportDataEmailTemplate
            .replace("{reportDataTitle}", this.reportDataTitle)
            .replace("{reportIncludeTotals}", this.reportIncludeTotals)
            .replace("{additionalReportData}", this.additionalReportData)
    }
}

// collection
export class CisReportDataGroupingCollection extends CollectionBase {
    add() {
        const item = new CisReportDataGroupingItem();
        item.screen = "work orders";
        item.fieldInOnKey = "code";
        this.items.push(item);
        this.selectItem(item);
        return item;
    }
}

// item
export class CisReportDataGroupingItem {
    screen = null;
    fieldInOnKey = null;
    sortOrder = null;

    dispose() {
        this.screen = null;
        this.fieldInOnKey = null;
        this.sortOrder = null;
    }
}

export class CisReportDataOnKeyFieldsCollection extends CollectionBase {
    add() {
        const item = new CisReportDataOnKeyFieldsItem();
        item.screen = "work orders";
        item.fieldInOnKey = "code";
        item.fieldTitle = "work order code";
        this.items.push(item);
        this.selectItem(item);
        return item;
    }
}

export class CisReportDataOnKeyFieldsItem {
    screen: string;          // list of onkey screens? : todo later.
    fieldInOnKey: string;
    fieldTitle: string;
    sortOrder: string;       // ascending, descending, none

}