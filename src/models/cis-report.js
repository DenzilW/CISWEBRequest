// @flow
import {CisReportData} from './cis-report-data';
import {CisProject} from './cis-project';
import {Report} from './report';
import {Charts} from './chart';
import {CisParameters} from './cis-parameters'
import {Email} from './email';

export class CisReport {
    project: CisProject;
    report: CisReport;
    charts: Charts;
    reportData: CisReportData;
    parameters: CisParameters;
    email: Email;

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
        this.report.dispose();
        this.charts.dispose();
        this.reportData.dispose();
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