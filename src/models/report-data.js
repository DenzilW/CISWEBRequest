/*
    Denzil Williams:
    Model for holding  the report data
*/
import {ReportBase} from './report-base';

export class ReportData extends ReportBase {
    reportDataTitle;
    reportGrouped;
    onKeyFieldToUsed;
    reportIncludeTotals;
    additionalReportData;

    saveToHtml() {
        // todo: return real html
        return "html";
    }
 }