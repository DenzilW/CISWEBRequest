/*
    Denzil Williams:
    Model for holding chart data
*/
import {ReportBase} from './report-base';
import {CollectionBase} from './collection-base';

export class Charts extends CollectionBase {
    add() {
        const newChart = new Chart(`chart ${this.items.length + 1}`);
        this.items.push(newChart);
        this.selectItem(newChart);

        return newChart;
    }

    saveToEmail() {
        return "html";
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

    dispose() {
        this.isSelected = null;
        this.whatAchieve = null;
        this.chartType = null;
        this.chartTitle = null;
        this.xAxisTitle = null;
        this.yAxisTitle = null;
        this.yAxisTitleprimary = null;
        this.yAxisTitlesecondary = null;
        this.axisScreen = null;
        this.axisFieldInOnkey = null;
        this.axisAddDataLabels = null;
        this.axisTrendlineRequired = null;
        this.fieldToGroupFieldInOnkey = null;
        this.fieldToGroupAddDataLabels = null;
        this.fieldToGroupTrendlineRequired = null;
        this.yAxisPrimaryScreen = null;
        this.yAxisPrimaryFieldInOnkey = null;
        this.yAxisPrimaryAddDataLabels = null;
        this.yAxisPrimaryTrendlineRequired = null;
        this.yAxisSecondaryScreen = null;
        this.yAxisSecondaryFieldInOnkey = null;
        this.yAxisSecondaryAddDataLabels = null;
        this.yAxisSecondaryTrendlineRequired = null;
        this.totals = null;
        this.sortOrder = null;
        this.additionalRequirements = null;
    }
}
