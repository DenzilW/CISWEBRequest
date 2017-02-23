// @flow
import {CisReportData} from './cis-report-data';
import {CisProject} from './cis-project';
import {Report} from './report';
import {Chart} from './chart';
import {CisParameters} from './cis-parameters'
import {Email} from './email';

export class CisReport {
    project: CisProject;
    report: CisReport;
    chart: Chart;
    reportData: CisReportData;
    parameters: CisParameters;
    email: Email;

    constructor() {
        this.project = new  CisProject();
        this.parameters = new CisParameters();
        this.report = new Report();
        this.chart = new Chart();
        this.reportData = new CisReportData();
        this.email = new Email();
    }

    saveToEmail() {
        return `
        ${this.project.saveToEmail()}
        ${this.report.saveToEmail()}
        ${this.parameters.saveToEmail()}
        ${this.chart.saveToEmail()}
        ${this.reportData.saveToEmail()}
        `;
    }

}