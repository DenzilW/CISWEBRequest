import {ReportData} from './report-data';
import {ReportBase} from './report-base';
import {CisProject} from './cis-project';
import {Report} from './report';
import {Charts} from './chart';

export class CisReport extends ReportBase {
    project;
    report;
    chart;
    reportData;

    constructor() {
        super();
        this.project = new  CisProject();
        this.report = new Report();
        this.chart = new Charts();
        this.reportData = new ReportData();
    }

    saveToEmail() {
        return "html";        
    }
}