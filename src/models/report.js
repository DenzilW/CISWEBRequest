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
}