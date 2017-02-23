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
        result.push(this.project.saveToEmail());
        result.push(this.report.saveToEmail());
        result.push(this.parameters.saveToEmail());
        result.push(this.chart.saveToEmail());
        result.push(this.reportData.saveToEmail());
        return result.join("\n");
    }

}