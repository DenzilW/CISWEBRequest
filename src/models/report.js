/*
    Denzil Williams:
    Model for holding data about the report
*/
import {ReportBase} from './report-base';
import {CisParameters} from './cis-parameters';

export class Report extends ReportBase {
    typeReport;
    usage;
    pageLayout;
    purposeOfReport;
    reportTitle
    formattingRequirements;
    parameters;

    saveToHtml() {
        // todo: return real html
        return "html";
    }
}