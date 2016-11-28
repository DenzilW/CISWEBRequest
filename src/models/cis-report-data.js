/*
    Denzil Williams:
    Model for holding  the report data
*/
import {ReportBase} from './report-base';
import {CollectionBase} from './collection-base';

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
        // todo: return real html
        return "html";
    }
}

// collection
export class CisReportDataGroupingCollection extends CollectionBase {
    add() {
        const item = new CisReportDataGroupingItem();
        this.items.push(item);
        return item;
    }
}

// item
export class CisReportDataGroupingItem {
    screen = null;
    fieldInOnKey = null;
    sortOrder = null;
}

export class CisReportDataOnKeyFieldsCollection extends CollectionBase {
    add() {
        const item = new CisReportDataOnKeyFieldsItem();
        this.items.push(item);
        return item;
    }
}

export class CisReportDataOnKeyFieldsItem {
    screen = null;          // list of onkey screens? : todo later.
    fieldInOnKey = null;
    fieldTitle = null;
    sortOrder = null;       // ascending, descending, none
}