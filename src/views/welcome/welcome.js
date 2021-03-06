import "aurelia-polyfills";

import {CisReport} from './../../models/cis-report';
import {PragmaTabSheetActions} from 'pragma-tabsheet';
import {emailTemplate} from './../../models/templates';

// @flow

export class Welcome {
    model = null;
    actions = null;
    tabsheet = null;
    
    constructor() {
        this.model = new CisReport();
        this.actions = {
            gotoNextTab: this.gotoNextTab.bind(this),
            gotoPreviousTab: this.gotoPreviousTab.bind(this),
            sendEmail: this.sendEmail.bind(this),
            addParameter: this.model.parameters.add.bind(this.model.parameters),
            addDataOnKeyFields: this.model.reportData.onKeyFields.add.bind(this.model.reportData.onKeyFields),
            refreshEmail: this.createEmailBody.bind(this)
        }
    }

    attached() {
        this.tabsheet = document.querySelector("pragma-tabsheet").au.controller.viewModel;
    }

    detached() {
        this.actions.gotoNextTab = null;
        this.actions.gotoPreviousTab = null;
        this.actions = null;
        this.tabsheet = null;
    }

    gotoNextTab() {
        let validMessage: string;
        validMessage = "";

        if (this.tabsheet.tabs.visibleTabs.indexOf(this.tabsheet.tabs.selectedTab) === 0) {
           validMessage = this.validateProjects();
           validMessage += this.validateReport();
           if (validMessage != "") {
               alert(validMessage);
           }
        }
        if (this.tabsheet.tabs.visibleTabs.indexOf(this.tabsheet.tabs.selectedTab) === 2) {
           validMessage = this.validateCharts();
           if (validMessage != "") {
               alert(validMessage);
           }
        }
        if (this.tabsheet.tabs.visibleTabs.indexOf(this.tabsheet.tabs.selectedTab) === 3) {
           validMessage = this.validateReportData();
           if (validMessage != "") {
               alert(validMessage);
           }
        }

        if (validMessage === "") { 
            this.tabsheet.performAction(PragmaTabSheetActions.gotoNextTab, null);

            const index = this.tabsheet.tabs.visibleTabs.length -1;
            if (this.tabsheet.tabs.visibleTabs.indexOf(this.tabsheet.tabs.selectedTab) === index) {
                this.createEmailBody();
            }
        }
       
    }

    gotoPreviousTab() {
        let validMessage: string;
        validMessage = "";

        if (this.tabsheet.tabs.visibleTabs.indexOf(this.tabsheet.tabs.selectedTab) === 0) {
           validMessage = this.validateProjects();
           validMessage += this.validateReport();
           if (validMessage != "") {
               alert(validMessage);
           }
        }
        if (this.tabsheet.tabs.visibleTabs.indexOf(this.tabsheet.tabs.selectedTab) === 2) {
           validMessage = this.validateCharts();
           if (validMessage != "") {
               alert(validMessage);
           }
        }
        if (this.tabsheet.tabs.visibleTabs.indexOf(this.tabsheet.tabs.selectedTab) === 3) {
           validMessage = this.validateReportData();
           if (validMessage != "") {
               alert(validMessage);
           }
        }

        if (validMessage === "") { 
            this.tabsheet.performAction(PragmaTabSheetActions.gotoPreviousTab, null);
        }
    }

    sendEmail() {
        const body = encodeURIComponent(document.getElementById("flex-body-main").innerText);
        const subjectMessage = encodeURIComponent("CIS Report Request");
        const mail = emailTemplate.replace("{subject}", subjectMessage).replace("{body}", body);

       window.open(mail);
    }

    createEmailBody() {
        let validMessage: string;
        validMessage = "";

        validMessage = this.validateProjects();
        validMessage += this.validateReport();
        validMessage += this.validateCharts();
        validMessage += this.validateReportData();

        if (validMessage != "") {
           alert(validMessage);
        }

        if (validMessage === "") {         
            this.model.email.body = this.model.saveToEmail();
        }
    }

    validateProjects(){
        return this.model.project.validate();
    }   

    validateReport(){
        return this.model.report.validate();
    }  

    validateReportData(){
        return this.model.reportData.validate();
    } 
    validateCharts() {
        return this.model.chart.validate();
    }
}