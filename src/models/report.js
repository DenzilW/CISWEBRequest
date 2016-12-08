/*
    Denzil Williams:
    Model for holding data about the report
*/
import {ReportBase} from './report-base';
import {CisParameters} from './cis-parameters';
import {reportEmailTemplate} from './templates';

export class Report extends ReportBase {
    typeReport: string;
    usage: string;
    pageLayout: string;
    purposeOfReport: sring;
    reportTitle: string;
    formattingRequirements: string;
    parameters: string;

    saveToEmail() {
        return reportEmailTemplate
            .replace("{typeOfReport}", this.typeReport)
            .replace("{usage}", this.usage)
            .replace("{pageLayout}", this.pageLayout)
            .replace("{purposeOfReport}", this.purposeOfReport)
            .replace("{reportTitle}", this.reportTitle)
            .replace("{formattingStyle}", this.formattingRequirements)
    }

    validate() {
        let validMessage: string;
        validMessage = "";
    
        if (this.typeReport == undefined || this.typeReport.length == 0) {
            validMessage += "Type Of Report must be filled out\n";
        }

        if (this.usage == undefined || this.usage.length == 0) {
            validMessage += "Usage must be filled out\n";
        }

        if (this.pageLayout == undefined || this.pageLayout.length == 0) {
            validMessage += "Page Layout must be filled out\n";
        }

        if (this.purposeOfReport == undefined || this.purposeOfReport.length == 0) {
            validMessage += "Purpose Of Report must be filled out\n";
        }

        if (this.reportTitle == undefined || this.reportTitle.length == 0) {
            validMessage += "Report Title must be filled out\n";
        }  

        return validMessage;   
    }      
}