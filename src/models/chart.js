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
            .replace("{chartTitle}", this.chartTitle)
            .replace("{puposeOfChart}", this.whatAchieve)
            .replace("{chartType}", this.chartType)
            .replace("{dimensionOnkeyFieldName}", this.dimensionOnkeyFieldName)
            .replace("{dimensionyAxisLabels}", this.dimensionyAxisLabels)
            .replace("{measureOnkeyField}", this.measureOnkeyField)
            .replace("{measureCalculation}", this.measureCalculation)
            .replace("{measureAxisLabels}", this.measureAxisLabels)
            .replace("{measureAxisDataLabels}", this.measureAxisDataLabels)
            .replace("{sortOrder}", this.sortOrder)
            .replace("{additionalRequirements}", this.additionalRequirements)
    }
    
     validate() {
        let validMessage: string;
        validMessage = "";
        if (this.chartTitle == undefined || this.chartTitle.length == 0) {
            validMessage += "Chart Title must have a value\n";
        }
        return validMessage;
     }
}
