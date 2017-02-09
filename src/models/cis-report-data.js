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
    reportIncludeTotals: string;
    additionalReportData: string;
    dataGroupings = CisReportDataGroupingCollection;
    onKeyFields = CisReportDataOnKeyFieldsCollection;

    _reportIncludeTotals: string;
    _sortOrder: string;

    get reportTotals() {
        this._reportIncludeTotals
    }

    set reportTotals(value) {
         this._reportIncludeTotals = value;
    }

        get sortOrder() {
        this._sortOrder
    }

    set sortOrder(value) {
         this._sortOrder = value;
    }

    constructor() {
        super();
        this.dataGroupings = new CisReportDataGroupingCollection();
        this.onKeyFields = new CisReportDataOnKeyFieldsCollection();

         this.options = {
            tot: [
                'Don\'t include totals',
                'Display totals for each column',
                'Display totals for each row',
                'Display totals for columns and rows',
            ],
            sortOrder: [
                'None specified',
                'Ascending',
                'Descending',
            ]
        }         
    }

    dispose() {
        this.dataGroupings.dispose();
        this.onKeyFields.dispose();
    }

    saveToEmail() {
        let email = "";

        email = reportDataEmailTemplate
            .replace("{reportDataTitle}", this.reportDataTitle);
        email += this.dataGroupings.saveToEmail();
        email += this.onKeyFields.saveToEmail();

        email += reportDataFooterEmailTemplate
                .replace("{reportIncludeTotals}", this.reportIncludeTotals)
                .replace("{additionalReportData}", this.additionalReportData)
        return email;    
    }

    validate() {
        let validMessage: string;
        validMessage = "";
    
        if (this.reportDataTitle == undefined || this.reportDataTitle.length == 0) {
            validMessage = "Report title must have a value\n";
        }

        if (this.reportIncludeTotals == undefined || this.reportIncludeTotals.length == 0) {
            validMessage += "Report totals must have a value\n";
        }

        return validMessage
    }     
}

// collection
export class CisReportDataGroupingCollection extends CollectionBase {
    add() {
        const item = new CisReportDataGroupingItem();
        item.screen = "work orders";
        item.fieldInOnKey = "code";
        this.items.push(item);
        this.selectItem(item);
        return item;
    }

   saveToEmail() {
        let email = "";
        let count = this.items.length;
        if (count > 0)
        {
            email =  reportDataGroupingItemEmailTemplateHeader
        }

        for(let param of this.items) {
            email += param.saveToEmail();
        };

        email += reportDataGroupingItemEmailTemplateFooter;

        return email;
   } 
}

// item
export class CisReportDataGroupingItem extends ReportBase{
    screen: string;
    fieldInOnKey: string;
    sortOrder: string;

   constructor() {
        super();
        this.sortOrder = 'None specified';
   }

    saveToEmail() {
        return reportDataGroupingItemEmailTemplate
                .replace("{screenInOnkey}", this.screen)
                .replace("{fieldInOnkey}", this.fieldInOnKey)
                .replace("{sortOrder}", this.sortOrder);
    }

}

export class CisReportDataOnKeyFieldsCollection extends CollectionBase {
    add() {
        const item = new CisReportDataOnKeyFieldsItem();
        item.screen = "work orders";
        item.fieldInOnKey = "code";
        item.fieldTitle = "work order code";
        this.items.push(item);
        this.selectItem(item);
        return item;
    }

   saveToEmail() {
        let email = "";
        let count = this.items.length;
        if (count > 0)
        {
            email =  reportDataOnKeyFieldsHeaderEmailTemplate
        }
        for(let param of this.items) {
            email += param.saveToEmail();
        }
        return email;
   }     
}

export class CisReportDataOnKeyFieldsItem extends ReportBase {
    screen: string;          // list of onkey screens? : todo later.
    fieldInOnKey: string;
    fieldTitle: string;
    sortOrder: string;       // ascending, descending, none 

   constructor() {
        super();
        this.sortOrder = 'None specified';
   }

    saveToEmail() {
        return reportDataOnKeyFieldsEmailTemplate
                .replace("{screenInOnKey}", this.screen)
                .replace("{fieldInOnKey}", this.fieldInOnKey)
                .replace("{fieldTitleOnReport}", this.fieldTitle)
                .replace("{sortOrder}", this.sortOrder);
    }   
}