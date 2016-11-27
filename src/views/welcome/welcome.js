import {CisReport} from './../../models/cis-report';
import {PragmaTabSheetActions} from 'pragma-tabsheet';

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
            addChart: this.model.charts.add.bind(this.model.charts)
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
        this.tabsheet.performAction(PragmaTabSheetActions.gotoNextTab, null);
    }

    gotoPreviousTab() {
        this.tabsheet.performAction(PragmaTabSheetActions.gotoPreviousTab, null);
    }

    sendEmail() {
        console.log('send email');
    }
}