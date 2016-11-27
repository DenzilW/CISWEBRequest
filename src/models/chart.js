/*
    Denzil Williams:
    Model for holding chart data
*/
import {ReportBase} from './report-base';
import {inject} from 'aurelia-framework';

export class Charts {
    items;

    constructor() {
        this.items = [];
    }

    dispose() {
        this.items.clear();
        this.items = null;
    }

    add() {
        const newCharts = new Chart();
        newCharts.chartTitle = `chart ${this.items.length + 1}`;
        this.items.push(newCharts);

        dispatchEvent(new CustomEvent('new:chart', {detail: newCharts}));

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
    xAxisTitle = null;
    yAxisTitle = null;
    yAxisTitleprimary = null;
    yAxisTitlesecondary = null;
    axisScreen = null;
    axisFieldInOnkey = null;
    axisAddDataLabels = null;
    axisTrendlineRequired = null;
    fieldToGroupFieldInOnkey = null;
    fieldToGroupAddDataLabels = null;
    fieldToGroupTrendlineRequired = null;
    yAxisPrimaryScreen = null;
    yAxisPrimaryFieldInOnkey = null;
    yAxisPrimaryAddDataLabels = null;
    yAxisPrimaryTrendlineRequired = null;
    yAxisSecondaryScreen = null;
    yAxisSecondaryFieldInOnkey = null;
    yAxisSecondaryAddDataLabels = null;
    yAxisSecondaryTrendlineRequired = null;
    totals = null;
    sortOrder = null;
    additionalRequirements = null;
}
