/*
    Denzil Williams:
    Model for holding  the report data
*/
import {ReportBase} from './report-base';

export class ReportData extends ReportBase {
    reportDataTitle = null;
    reportGroupedScreen = null;
    reportGroupedFieldInOnKey = null;
    reportGroupedSortOrder = null;
    onKeyFieldToUsedScreen = null;
    onKeyFieldToUsedFieldInOnKey = null;
    onKeyFieldToUsedFieldTitle = null;
    onKeyFieldToUsedSortOrder = null;
    reportIncludeTotals = null;
    additionalReportData = null;

    saveToEmail() {
        // todo: return real html
        return "html";
    }
 }