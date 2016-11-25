/*
    Denzil Williams:
    Model for holding chart data
*/
import {ReportBase} from './report-base';

export class Chart extends ReportBase {
    whatAchieve = null;
    chartType = null;
    chartTitle = null;
    xaxsTitle = null;
    yaxisTitle = null;
    yaxisTitleprimary = null;
    yaxisTitlesecondary = null;
    axisScreen = null;
    axisFieldInOnkey = null;
    axisAddDataLabels = null;
    axisTrendlineRequired = null;
    fieldToGroupFieldInOnkey = null;
    fieldToGroupAddDataLabels = null;
    fieldToGroupTrendlineRequired = null;
    yaxisPrimaryScreen = null;
    yaxisPrimaryFieldInOnkey = null;
    yaxisPrimaryAddDataLabels = null;
    yaxisPrimaryTrendlineRequired = null;
    yaxisSecondaryScreen = null;
    yaxisSecondaryFieldInOnkey = null;
    yaxisSecondaryAddDataLabels = null;
    yaxisSecondaryTrendlineRequired = null;
    totals = null;
    sortorder = null;
    additionalRequirements = null;

    saveToHtml() {
        // todo: return real html
        return "html";
    }
}