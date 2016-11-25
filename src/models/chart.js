/*
    Denzil Williams:
    Model for holding chart data
*/
import {ReportBase} from './report-base';

export class Chart extends ReportBase {
    whatAchieve;
    chartType;
    chartTitle;
    xaxsTitle;
    yaxisTitle; 
    yaxisTitleprimary;
    yaxisTitlesecondary;
    axisScreen;
    axisFieldInOnkey;
    axisAddDataLabels;
    axisTrendlineRequired;
    fieldToGroupFieldInOnkey;
    fieldToGroupAddDataLabels;
    fieldToGroupTrendlineRequired;
    yaxisPrimaryScreen;
    yaxisPrimaryFieldInOnkey;
    yaxisPrimaryAddDataLabels;
    yaxisPrimaryTrendlineRequired;
    yaxisSecondaryScreen;
    yaxisSecondaryFieldInOnkey;
    yaxisSecondaryAddDataLabels;
    yaxisSecondaryTrendlineRequired;
    totals;
    sortorder;
    additionalRequirements;

    saveToEmail() {
        // todo: return real html
        return "html";
    }
}