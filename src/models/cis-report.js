import {ReportData} from './report-data';
import {ReportBase} from './report-base';
import {CisProject} from './cis-project';
import {Report} from './report';
import {Charts} from './chart';

export class CisReport extends ReportBase {
    project = null;
    report = null;
    chart = null;
    reportData = null;

    constructor() {
        super();
        this.project = new  CisProject();
        this.report = new Report();
        this.chart = new Charts();
        this.reportData = new ReportData();

        this.project.projectNumber = "pn 1";
    }

    saveToEmail() {
        return "html";        
    }
}