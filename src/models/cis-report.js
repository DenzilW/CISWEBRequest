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

    constructor() {
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
        this.report = null;
        this.charts = null;
        this.reportData = null;
        this.email = null;
    }

    saveToEmail() {
        return `
        ${this.project.saveToEmail()}
        ${this.report.saveToEmail()}
        ${this.parameters.saveToEmail()}
        ${this.charts.saveToEmail()}
        ${this.reportData.saveToEmail()}
        `;
    }
}