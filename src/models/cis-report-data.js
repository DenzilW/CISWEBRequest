/*
    Denzil Williams:
    Model for holding  the report data
    
    temp chanage for branch
*/
import {ReportBase} from './report-base';
import {CollectionBase} from './collection-base';
import {reportDataEmailTemplate} from './templates';
import {reportDataGroupingItemEmailTemplateHeader} from './templates';
import {reportDataGroupingItemEmailTemplate} from './templates';
import {reportDataFooterEmailTemplate} from './templates';
import {reportDataOnKeyFieldsHeaderEmailTemplate} from './templates';
import {reportDataOnKeyFieldsEmailTemplate} from './templates';
import {reportDataGroupingItemEmailTemplateFooter} from './templates';

export class CisReportData extends ReportBase {
    reportDataTitle: string;
    onKeyFields = CisReportDataOnKeyFieldsCollection;

    constructor() {
        super();
        this.onKeyFields = new CisReportDataOnKeyFieldsCollection();

    }

    dispose() {
        this.onKeyFields.dispose();
    }

    saveToEmail() {
        let email = "";

        email = reportDataEmailTemplate
            .replace("{reportDataTitle}", this.reportDataTitle);
        email += this.onKeyFields.saveToEmail();

        return email;    
    }

    validate() {
        let validMessage: string;
        validMessage = "";
    
        if (this.reportDataTitle == undefined || this.reportDataTitle.length == 0) {
            validMessage = "Report data title must have a value\n";
        }

        return validMessage
    }     
}

export class CisReportDataOnKeyFieldsCollection extends CollectionBase {
    add() {
        const item = new CisReportDataOnKeyFieldsItem();
        item.fieldInOnKey = "";
        item.group = false;
        item.total = false;
        item.showonreport = false;
        this.items.push(item);
        this.selectItem(item);

        return item;
    }

   saveToEmail() {
        let email = "";
        for(let param of this.items) {
            email += param.saveToEmail();
        }
        return email;
   }  
   
   remove(parameter) {
        const index = this.items.indexOf(parameter);
        this.removeAt(index);
   }      
}

export class CisReportDataOnKeyFieldsItem extends ReportBase {
    fieldInOnKey: string;
    group: boolean; 
    total: boolean;  
    showonreport: boolean;

   constructor() {
        super();
        this.fieldInOnKey = "";
        this.group = false;
        this.total = false;
        this.showonreport = false;
   }

    saveToEmail() {
        return reportDataOnKeyFieldsEmailTemplate
                .replace("{fieldInOnKey}", this.fieldInOnKey)
                .replace("{group}", this.group)
                .replace("{total}", this.total)
                .replace("{showonreport}", this.showonreport);
    }
}