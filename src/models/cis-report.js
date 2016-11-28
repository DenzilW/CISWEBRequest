import {CisReportData} from './cis-report-data';
import {ReportBase} from './report-base';
import {CisProject} from './cis-project';
import {Report} from './report';
import {Charts} from './chart';
import {CisParameters} from './cis-parameters'
import {Email} from './email';
import {inject} from 'aurelia-framework';

export class CisReport {
    project = null;
    report = null;
    charts = null;
    reportData = null;
    parameters = null;
    email = null;

    static inject() { return [EventAggregator]; }
    constructor(eventAggregator) {
        this.project = new  CisProject();
        this.parameters = new CisParameters();
        this.report = new Report();
        this.charts = new Charts();
        this.reportData = new CisReportData();
        this.email = new Email();
    }

    dispose() {
        this.project.dispose();
        this.parameters.dispose();
        this.reports.dispose();
        this.charts.dispose();
        this.reportData.dispose();

        this.project = null;
        this.parameters = null;
        this.reports = null;
        this.charts = null;
        this.reportData = null;
        this.email = null;
    }

    saveToEmail() {
        return "proview of email to send, will be replaced by denzil";
    }
}