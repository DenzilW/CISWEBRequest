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
        let result = [];
        result.push(this.project.saveToEmail().trim());
        result.push(this.report.saveToEmail().trim());
        result.push(this.parameters.saveToEmail().trim());
        result.push(this.chart.saveToEmail().trim());
        result.push(this.reportData.saveToEmail().trim());
        return result.join("\n");

        // return `
        // ${this.project.saveToEmail().trim()}
        // ${this.report.saveToEmail().trim()}
        // ${this.parameters.saveToEmail().trim()}
        // ${this.chart.saveToEmail().trim()}
        // ${this.reportData.saveToEmail().trim()}
        // `.trim();
    }

}