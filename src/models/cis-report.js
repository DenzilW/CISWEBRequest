import {ReportData} from './report-data';
import {ReportBase} from './report-base';

export class CisReport extends ReportBase {
    project;
    report;
    chart;
    reportData;

    constructor() {
        super();
        this.reportData = new ReportData();
    }

    saveToHtml() {
        // todo: return real html
        return "html";
    }
}