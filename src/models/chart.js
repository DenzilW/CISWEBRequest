/*
    Denzil Williams:
    Model for holding chart data
*/


import {ReportBase} from './report-base';
import {chartEmailTemplate} from './templates';

export class Chart extends ReportBase {
    chartTitle: string;
    puposeOfChart: string;
    chartType: string;
    dimensionOnkeyFieldName: string;
    dimensionyAxisLabels: boolean;
    measureOnkeyField: string;
    measureCalculation: string;
    measureAxisLabels: boolean;
    measureAxisDataLabels: boolean;
    sortOrder: String;
    additionalRequirements: string;

    constructor() {
        super();
        this.chartType = 'Clustered column (vertical)';
        this.sortOrder = 'Dimension (A-Z)';
        this.dimensionyAxisLabels = false;
        this.measureAxisLabels = false;
        this.measureAxisDataLabels = false;
        this.options = {
            ctype: [
                'Line',
                'Bar',
                'Other (please specify)',
            ],
            sort: [
                'Dimension (A-Z)',
                'Dimension (Z-A)',
                'Value (0-9)',
                'Value (9-0)',
            ],
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
            .replace("{xAxisScreen}", this.xAxisScreen)
            .replace("{yAxisTitleprimary}", this.yAxisTitleprimary)
            .replace("{xAxisFieldInOnkey}", this.xAxisFieldInOnkey)
            .replace("{xAxisFieldInOnkey}", this.xAxisFieldInOnkey)
            .replace("{xAxisAddDataLabels}", this.getYesOrNo(this.xAxisAddDataLabels))
            .replace("{xAxisTrendlineRequired}", this.getYesOrNo(this.xAxisTrendlineRequired))
            .replace("{fieldToGroupFieldInOnkey}", this.fieldToGroupFieldInOnkey)
            .replace("{fieldToGroupAddDataLabels}", this.getYesOrNo(this.fieldToGroupAddDataLabels))
            .replace("{fieldToGroupTrendlineRequired}", this.getYesOrNo(this.fieldToGroupTrendlineRequired))
            .replace("{yAxisPrimaryScreen}", this.yAxisPrimaryScreen)
            .replace("{yAxisPrimaryFieldInOnkey}", this.yAxisPrimaryFieldInOnkey)
            .replace("{yAxisPrimaryAddDataLabels}", this.getYesOrNo(this.yAxisPrimaryAddDataLabels))
            .replace("{yAxisPrimaryTrendlineRequired}", this.getYesOrNo(this.yAxisPrimaryTrendlineRequired))
            .replace("{yAxisSecondaryScreen}", this.yAxisSecondaryScreen)
            .replace("{yAxisSecondaryFieldInOnkey}", this.yAxisSecondaryFieldInOnkey)
            .replace("{yAxisSecondaryAddDataLabels}", this.getYesOrNo(this.yAxisSecondaryAddDataLabels))
            .replace("{yAxisSecondaryTrendlineRequired}", this.getYesOrNo(this.yAxisSecondaryTrendlineRequired))
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

     getYesOrNo(yesnoStr) {
         let returnvalue = 'No'
         if (yesnoStr == true){
            returnvalue = 'Yes'
         }
         return returnvalue;
     }
}
