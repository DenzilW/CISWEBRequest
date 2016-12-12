/*
    Denzil Williams:
    Model for holding chart data
*/

// @flow
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

    saveToEmail() {
        let email = "";
        for(let chart of this.items) {
            email += chart.saveToEmail();
        }
        return email;
    }

    validate() {
        let validMessage: string;
        validMessage = "";
        for (let chart of this.items) {
            validMessage += chart.validate()
        }  
        return validMessage;
    }


}

export class Chart extends ReportBase {
    isSelected: boolean;
    whatAchieve: string;
    chartType: string;
    chartTitle: string;
    xAxisTitle: string;
    yAxisTitlePrimary: string;
    yAxisTitleSecondary: string;
    axisScreen: string;
    axisFieldInOnkey: string;
    axisAddDataLabels: string;
    axisTrendlineRequired: string;
    fieldToGroupFieldInOnkey: string;
    fieldToGroupAddDataLabels: string;
    fieldToGroupTrendlineRequired: string;
    yAxisPrimaryScreen: string;
    yAxisPrimaryFieldInOnkey: string;
    yAxisPrimaryAddDataLabels: string;
    yAxisPrimaryTrendlineRequired: string;
    yAxisSecondaryScreen: string;
    yAxisSecondaryFieldInOnkey: string;
    yAxisSecondaryAddDataLabels: string;
    yAxisSecondaryTrendlineRequired: string;
    totals: string;
    sortOrder: String;
    additionalRequirements: string;

    constructor(chartTitle: string) {
        super();
        this.chartTitle = chartTitle;
        this.isSelected = true;
        this.options = {
            ctype: [
                '"Clustered column (vertical)',
                'Stacked column',
                '100% stacked column (vertical)',
                'Line',
                'Stacked line',
                '100% Stacked line',  
                'Column and line combo',
                'Stacked column and line combo', 
                'Pie', 
                'Exploded pie', 
                'Clustered bar (horizontal)', 
                'Stacked bar (horizontal)', 
                '100% stacked bar (horizontal)', 
                'Area', 
                'Area stacked', 
                '100% area stacked',  
                'Other (please specify)'
            ]
        }         
        
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

     validate() {
        let validMessage: string;
        validMessage = "";
        if (this.totals == undefined || this.totals.length == 0) {
            validMessage += "Total must have a value\n";
        }
        if (this.sortOrder == undefined || this.sortOrder.length == 0) {
            validMessage += "Sort Order must have a value\n";
        }
        return validMessage;
     }
}
