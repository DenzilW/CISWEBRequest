/*
    Denzil Williams:
    Model for holding  the report data
*/
import {ReportBase} from './report-base';
import {CollectionBase} from './collection-base';
import {reportDataEmailTemplate} from './templates';

export class CisReportData extends ReportBase {
    reportDataTitle = null;
    reportIncludeTotals = null;
    additionalReportData = null;
    dataGroupings = null;
    onKeyFields = null;

    constructor() {
        super();
        this.dataGroupings = new CisReportDataGroupingCollection();
        this.onKeyFields = new CisReportDataOnKeyFieldsCollection();
    }

    dispose() {
        this.dataGroupings.dispose();
        this.onKeyFields.dispose();

        this.reportDataTitle = null;
        this.reportIncludeTotals = null;
        this.additionalReportData = null;
        this.dataGroupings = null;
        this.onKeyFields = null;
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
    screen = null;          // list of onkey screens? : todo later.
    fieldInOnKey = null;
    fieldTitle = null;
    sortOrder = null;       // ascending, descending, none

    dispose() {
        this.screen = null;
        this.fieldInOnKey = null;
        this.fieldTitle = null;
        this.sortOrder = null;
    }
}