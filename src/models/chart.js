/*
    Denzil Williams:
    Model for holding chart data
*/
import {ReportBase} from './report-base';

export class Charts {
    items;
    selectedChart = null;

    constructor() {
        this.items = [];
    }

    dispose() {
        this.items.clear();
        this.items = null;
    }

    add() {
        const newChart = new Chart(`chart ${this.items.length + 1}`);
        this.items.push(newChart);
        this.selectChart(newChart);

        return newChart;
    }

    remove(chart) {
        const index = this.items.indexOf(chart);
        this.removeAt(index);
    }

    removeAt(index) {
        return this.items.splice(index, 1); 
    }

    saveToEmail() {
        return "html";
    }

    selectChart(chart) {
        if (this.selectedChart) {
            this.selectedChart.isSelected = false;
        }

        chart.isSelected = true;
        this.selectedChart = chart;
    }
}

export class Chart extends ReportBase {
    isSelected = null;
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

    constructor(chartTitle) {
        super();
        this.chartTitle = chartTitle;
        this.isSelected = true;
    }
}
