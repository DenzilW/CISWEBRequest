/*
    Denzil Williams:
    Model for holding data about the report
*/
import {ReportBase} from './report-base';

export class Report extends ReportBase {
    typeReport;
    usage;
    pageLayout;
    purposeOfReport;
    reportTitle
    formattingRequirements;

    saveToHtml() {
        // todo: return real html
        return "html";
    }
}