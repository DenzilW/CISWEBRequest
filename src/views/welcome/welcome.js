import {CisReport} from './../../models/cis-report';

export class Welcome {
    model = null;
    actions = null;
    
    constructor() {
        this.model = new CisReport();

        this.actions = {
            gotoNextTab: this.gotoNextTab.bind(this)
        }
    }

    attached() {

    }

    detached() {
        this.actions.gotoNextTab = null;
        this.actions = null;
    }

    gotoNextTab() {
        console.log(this.model);
    }

    gotoPreviousTab() {
        console.log("go to previous tab");
    }
}