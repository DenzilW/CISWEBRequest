/*
    Denzil Williams:
    Model for holding chart data
*/


import {ReportBase} from './report-base';
import {chartEmailTemplate} from './templates';

export class Chart extends ReportBase {
    chartTitle: string;
    purposeOfChart: string;
    chartType: string;
    chartTypeOther: string;
    dimensionOnkeyFieldName: string;
    dimensionyAxisLabels: boolean;
    measureOnkeyField: string;
    measureCalculation: string;
    measureAxisLabels: boolean;
    measureAxisDataLabels: boolean;
    sortOrder: string;
    additionalRequirements: string;
    options: any;
    showOtherInput: boolean = false;

    _chartType: string;

    get chartType() {
        return this._chartType;
    }

    set chartType(value) {
        this._chartType = value;
        const lastOption = this.options.ctype[2];
        this.showOtherInput = value == lastOption;
    }

    constructor() {
        super();
        this.chartTitle = "";
        this.purposeOfChart = "";
        this.dimensionyAxisLabels = false;
        this.measureAxisLabels = false;
        this.measureAxisDataLabels = false;
        this.chartTypeOther = "";
        this.dimensionOnkeyFieldName = "";
        this.measureOnkeyField = "";
        this.measureCalculation = "";
        this.options = {
            ctype: [
                'Line',
                'Bar',
                'Other (please specify)'
            ],
            sort: [
                'Dimension (A-Z)',
                'Dimension (Z-A)',
                'Value (0-9)',
                'Value (9-0)'
            ]
        }
    }
    saveToEmail() {
        return chartEmailTemplate
            .replace("{chartTitle}", this.chartTitle)
            .replace("{purposeOfChart}", this.purposeOfChart)
            .replace("{chartTypeOther}", this.chartTypeOther)
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
