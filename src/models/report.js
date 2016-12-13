/*
    Denzil Williams:
    Model for holding data about the report
*/


import {ReportBase} from './report-base';
import {CisParameters} from './cis-parameters';
import {reportEmailTemplate} from './templates';

export class Report extends ReportBase {
    typeReport: string;
    usage: string;
    pageLayout: string;
    purposeOfReport: string;
    reportTitle: string;
    formattingRequirements: string;
    parameters: string;

    _typeReport: string;
    _usage: string
    pageLayout: string;
    _usage: string;

    get typeReport(): string {
        return this._typeReport;
    }

    set typeReport(value) {
        this._typeReport = value;
    }

    get usage() {
        return this._usage;
    }

    set usage(value) {
        this._usage = value;
    }  

    get pageLayout() {
        return this._pageLayout;
    }

    set pageLayout(value) {
        this._pageLayout = value;
    }      

    constructor() {
        super();
        this.options = {
            tor: [
                'Analyser Report',
                'Crystal Report',
            ],
            usage: [
                'On Key Report',
                'From a browser usin Stdselection',
                'From notification received via Notification Manager',
            ],
            pgl: [
                'Potrait',
                'Landscape'
            ]
        }
    }

    saveToEmail() {
        return reportEmailTemplate
            .replace("{typeOfReport}", this.typeReport)
            .replace("{usage}", this.usage)
            .replace("{pageLayout}", this.pageLayout)
            .replace("{purposeOfReport}", this.purposeOfReport)
            .replace("{reportTitle}", this.reportTitle)
            .replace("{formattingStyle}", this.formattingRequirements)
    }

    validate() {
        let validMessage: string;
        validMessage = "";
    
        if (this.typeReport == undefined || this.typeReport.length == 0) {
            validMessage += "Type Of Report must have a value\n";
        }

        if (this.usage == undefined || this.usage.length == 0) {
            validMessage += "Usage must have a value\n";
        }

        if (this.pageLayout == undefined || this.pageLayout.length == 0) {
            validMessage += "Page Layout must have a value\n";
        }

        if (this.purposeOfReport == undefined || this.purposeOfReport.length == 0) {
            validMessage += "Purpose Of Report must have a value\n";
        }

        if (this.reportTitle == undefined || this.reportTitle.length == 0) {
            validMessage += "Report Title must have a value\n";
        }  

        return validMessage;   
    }      
}