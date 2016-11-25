/*
    Denzil Williams:
    Model for holding  the report data
*/
import {ReportBase} from './report-base';

export class ReportData extends ReportBase {
    reportDataTitle;
    reportGroupedScreen;
    reportGroupedFieldInOnKey;
    reportGroupedSortOrder
    onKeyFieldToUsedScreen;
    onKeyFieldToUsedFieldInOnKey;
    onKeyFieldToUsedFieldTitle;
    onKeyFieldToUsedSortOrder;
    reportIncludeTotals;
    additionalReportData;

    saveToEmail() {
        // todo: return real html
        return "html";
    }
 }