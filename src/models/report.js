/*
    Denzil Williams:
    Model for holding data about the report
*/
import {ReportBase} from './report-base';
import {CisParameters} from './cis-parameters';

export class Report extends ReportBase {
    typeReport = null;
    usage = null;
    pageLayout = null;
    purposeOfReport = null;
    reportTitle = null;
    formattingRequirements = null;
    parameters = null;

    saveToEmail() {
        // todo: return real html
        return "html";
    }
}