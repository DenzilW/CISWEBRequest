import {ReportData} from './report-data';
import {ReportBase} from './report-base';
import {CisProject} from './cis-project';
import {Report} from './report';
import {Charts} from './chart';
import {CisParameters} from './cis-parameters'

export class CisReport extends ReportBase {
    project = null;
    report = null;
    chart = null;
    reportData = null;
    parameters = null;

    constructor() {
        super();
        this.project = new  CisProject();
        this.parameters = new CisParameters();
        this.report = new Report();
        this.chart = new Charts();
        this.reportData = new ReportData();
    }

    saveToEmail() {
        return "html";        
    }
}