import {ReportData} from './report-data';
import {ReportBase} from './report-base';
import {CisProject} from './cis-project';
import {Report} from './report';
import {Chart} from './chart';

export class CisReport extends ReportBase {
    project;
    report;
    chart;
    reportData;

    constructor() {
        super();
        this.project = new  CisProject();
        this.report = new Report();
        this.chart = new Chart();
        this.reportData = new ReportData();
    }

    saveToHtml() {
        // todo: return real html
        return "html";
    }
}