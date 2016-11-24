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
    yaxisTitle;  // todo: fix rest below this
    yaxistitleprimary;
    yaxistitlesecondary;
    axisscreen;
    axisfieldinonkey;
    axisadddatalabels;
    axistrendlinerequired;
    fieldtogroupfieldinonkey;
    fieldtogroupadddatalabels;
    fieldtogrouptendlinerequired;
    yaxisprimaryscreen;
    yaxisprimaryfieldinonkey;
    yaxisprimaryadddatalabels;
    yaxisprimarytrendlinerequired;
    yaxissecondaryscreen;
    yaxissecondaryfieldinonkey;
    yaxissecondaryadddatalabels;
    yaxissecondarytrendlinerequired;
    totals;
    sortorder;
    additionalrequirements;

    saveToHtml() {
        // todo: return real html
        return "html";
    }
}