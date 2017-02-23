/*
    Denzil Williams:
    Model for holding data about the report
*/


import {ReportBase} from './report-base';
import {CisParameters} from './cis-parameters';
import {reportEmailTemplate} from './templates';
import {reportManagerReportTemplate} from './templates';
import {reportEmailTemplate2} from './templates';

export class Report extends ReportBase {
    typeReport: string;
    standardcustomreport: string;
    usage: string;
    notificationManagerReport: string;
    pageLayout: string;
    purposeOfReport: string;
    reportTitle: string;
    formattingRequirements: string;
    parameters: string;
    showOtherInput: boolean = false;

    _typeReport: string;
    _usage: string
    _pageLayout: string;
    _usage: string;
    _standardcustomreport: string;
    _notificationManagerReport: string;

    get typeReport() {
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
        const lastOption = this.options.usage[2];
        this.showOtherInput = value == lastOption;
    }  

    get pageLayout() {
        return this._pageLayout;
    }

    set pageLayout(value) {
        this._pageLayout = value;
    }      

    get standardcustomreport() {
        return this._standardcustomreport;
    }

    set standardcustomreport(value) {
        this._standardcustomreport = value;
    }      

    get notificationManagerReport() {
        return this._notificationManagerReport;
    }

    set notificationManagerReport(value) {
        this._notificationManagerReport = value;
    }

    constructor() {
        super();
        this.notificationManagerReport = "";
        this.purposeOfReport = "";
        this.formattingRequirements= "";
        this.options = {
            tor: [
                'Analyser Report',
                'Crystal Report',
                'SSRS Report',
            ], 
            usage: [
                'On Key Parameter Report',
                'Based on selected items eg WorkOrders',
                'Notification Manager Report',
            ],
            pgl: [
                'Portrait',
                'Landscape'
            ],
            scr: [
                'AC Pack Report',
                'Custom Report'
            ]
        }
    }

    saveToEmail() {
        let reportEmailTemplatetmp = '';

        reportEmailTemplatetmp = reportEmailTemplate
                                 .replace("{typeOfReport}", this.typeReport)
                                 .replace("{standardcustomreport}", this.standardcustomreport)
                                 .replace("{usage}", this.usage)
                                 .trim();

        if (this.usage == "Notification Manager Report") {
            reportEmailTemplatetmp += reportManagerReportTemplate.replace("{notificationManagerReport}", this.notificationManagerReport).trim()
        }

        reportEmailTemplatetmp += reportEmailTemplate2
            .replace("{pageLayout}", this.pageLayout)
            .replace("{purposeOfReport}", this.purposeOfReport)
            .replace("{reportTitle}", this.reportTitle)
            .replace("{formattingStyle}", this.formattingRequirements)

        return reportEmailTemplatetmp.trim()
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