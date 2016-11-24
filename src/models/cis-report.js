import {ReportData} from './report-data';
import {ReportBase} from './report-base';
import {CisProject} from './cis-project';

export class CisReport extends ReportBase {
    project;
    report;
    chart;
    reportData;

    constructor() {
        super();
        this.project = new  CisProject();
        this.reportData = new ReportData();
    }

    saveToHtml() {
        // todo: return real html
        return "html";
    }
}