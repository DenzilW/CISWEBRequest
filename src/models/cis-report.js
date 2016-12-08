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

    saveToEmail() {
        return `
        ${this.project.saveToEmail()}
        ${this.report.saveToEmail()}
        ${this.parameters.saveToEmail()}
        ${this.charts.saveToEmail()}
        ${this.reportData.saveToEmail()}
        `;
    }

    validate() {
        let valid: boolean;
        let validMessage: string;
        validMessage = "";
        valid = true;
    
        if (this.typeReport == undefined) {
            validMessage += "Type Of Report must be filled out\n";
            valid = false;
        }

        if (this.usage == undefined) {
            validMessage += "Usage must be filled out\n";
            valid = false;
        }

        if (this.pageLayout == undefined) {
            validMessage += "Page Layout must be filled out\n";
            valid = false;
        }

        if (this.purposeOfReport == undefined) {
            validMessage += "Purpose Of Report must be filled out\n";
            valid = false;
        }

        if (this.reportTitle == undefined) {
            validMessage += "Report Title must be filled out\n";
            valid = false;
        }  

      //  if (valid == false) {
      //      alert(validMessage);
      //  }

        return validMessage;   
    }    
}