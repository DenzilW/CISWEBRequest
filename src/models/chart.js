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
        return newCharts;
    }

    remove(chart) {
        const index = this.items.indexOf(chart);
        this.removeAt(index);
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


}
