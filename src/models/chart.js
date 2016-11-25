/*
    Denzil Williams:
    Model for holding chart data
*/
import {ReportBase} from './report-base';


export class Charts {
    items;

    constructor() {
        this.items = [];
    }

    add() {
        const newCharts = new Chart();
        this.items.push(newCharts);
        return newCharts
    }

    remove(chart) {
        const index = this.items.indexOf(chart)
        this.removeAt(index)
    }

    removeAt(index) {
        // splice the array
        return this.items.splice(index, 1); 
    }

    saveToEmail() {
        // todo: return real html
        return "html";
    }
}

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


}
