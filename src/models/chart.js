/*
    Denzil Williams:
    Model for holding chart data
*/
import {ReportBase} from './report-base';
import {CollectionBase} from './collection-base';
import {chartEmailTemplate} from './templates';

export class Charts extends CollectionBase {
    add() {
        const newChart = new Chart(`chart ${this.items.length + 1}`);
        this.items.push(newChart);
        this.selectItem(newChart);

        return newChart;
    }


}

export class Chart extends ReportBase {
    isSelected = null;
    whatAchieve = null;
    chartType = null;
    chartTitle = null;
    xAxisTitle = null;
    yAxisTitlePrimary = null;
    yAxisTitleSecondary = null;
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
        this.yAxisTitlePrimary = null;
        this.yAxisTitleSecondary = null;
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

        saveToEmail() {
        return chartEmailTemplate
            .replace("{chartAchieve}", this.whatAchieve)
            .replace("{chartType}", this.chartType)
            .replace("{chartTitle}", this.chartTitle)
            .replace("{xAxisTitle}", this.xAxisTitle)
            .replace("{yAxisTitlePrimary}", this.yAxisTitlePrimary)
            .replace("{yAxisTitleSecondary}", this.yAxisTitleSecondary)
            .replace("{axisScreen}", this.axisScreen)
            .replace("{yAxisTitleprimary}", this.yAxisTitleprimary)
            .replace("{axisFieldInOnkey}", this.axisFieldInOnkey)
            .replace("{axisFieldInOnkey}", this.axisFieldInOnkey)
            .replace("{axisAddDataLabels}", this.axisAddDataLabels)
            .replace("{axisTrendlineRequired}", this.axisTrendlineRequired)
            .replace("{fieldToGroupFieldInOnkey}", this.fieldToGroupFieldInOnkey)
            .replace("{fieldToGroupAddDataLabels}", this.fieldToGroupAddDataLabels)
            .replace("{fieldToGroupTrendlineRequired}", this.fieldToGroupTrendlineRequired)
            .replace("{yAxisPrimaryScreen}", this.yAxisPrimaryScreen)
            .replace("{yAxisPrimaryFieldInOnkey}", this.yAxisPrimaryFieldInOnkey)
            .replace("{yAxisPrimaryAddDataLabels}", this.yAxisPrimaryAddDataLabels)
            .replace("{yAxisPrimaryTrendlineRequired}", this.yAxisPrimaryTrendlineRequired)
            .replace("{yAxisSecondaryScreen}", this.yAxisSecondaryScreen)
            .replace("{yAxisSecondaryFieldInOnkey}", this.yAxisSecondaryFieldInOnkey)
            .replace("{yAxisSecondaryAddDataLabels}", this.yAxisSecondaryAddDataLabels)
            .replace("{yAxisSecondaryTrendlineRequired}", this.yAxisSecondaryTrendlineRequired)
            .replace("{totals}", this.totals)
            .replace("{sortOrder}", this.sortOrder)
            .replace("{additionalRequirements}", this.additionalRequirements)
    }
}
