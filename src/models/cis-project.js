/*
    Denzil Williams:
    Model for holding information about the project
*/

import {ReportBase} from './report-base';
import {projectEmailTemplate, otherDBLocation} from './templates';

export class CisProject extends ReportBase{
    projectNumber: string;
    client: sring;
    requester: string;
    typeOfRequest: string;
    requesteremailaddress: string;
    onkeyconnectionpath: string;
    onkeyusername: string;
    onkeypassword: string;
    options: any;
    showOtherInput: boolean = false;
    databaseLocationOther: string;

    _databaseLocation: string;

    get databaseLocation() {
        return this._databaseLocation;
    }

    set databaseLocation(value) {
        this._databaseLocation = value;
        const lastOption = this.options.dbl[2];
        this.showOtherInput = value == lastOption;
    }

    constructor() {
        super();
        this.client = "";
        this.requesteremailaddress = "";
        this.onkeyconnectionpath = "";
        this.onkeyusername = "";
        this.onkeypassword = "";
        this.options = {
            dbl: [
                'We will arrange for a backup on sftp',
                'This database in available on the ASP server',
                'Other (please specify)'
            ],
            tor: [
                'New Report',
                'Modification',
                'Bug'                
            ]
        }
    }

    dispose() {
        // nothing to clean here because these are just strings
    }

    saveToEmail() {
        let projectEmailTemplatetmp = projectEmailTemplate
            .replace("{projectNumber}", this.projectNumber)
            .replace("{client}", this.client)
            .replace("{requester}", this.requester)
            .replace("{requesterEmailAddress}", this.requesteremailaddress)
            .replace("{typeOfRequest}", this.typeOfRequest)
            .replace("{onkeyConnectionPath}", this.onkeyconnectionpath)
            .replace("{onkeyUsername}", this.onkeyusername)
            .replace("{onkeyPassword}", this.onkeypassword)
            .replace("{databaseLocation}", this.databaseLocation);

        if (this.databaseLocationOther) {
            projectEmailTemplatetmp += otherDBLocation.replace("{otherDatabaseLocation}", this.databaseLocationOther)
        }

        return projectEmailTemplatetmp;
    }

    validate() {
        let validMessage: string;
        validMessage = "";
    
        if (this.projectNumber == undefined || this.projectNumber.length == 0) {
            validMessage = "Project Number must have a value\n";
        }

        if (this.requester == undefined || this.requester.length == 0) {
            validMessage += "Requester must have a value\n";
        }

        if (this.typeOfRequest == undefined || this.typeOfRequest.length == 0) {
            validMessage += "Type Of Request must have a value\n";
        }
        
        if (this.databaseLocation == undefined || this.databaseLocation.length == 0) {
            validMessage += "Database Location must have a value\n";
        }

        return validMessage;   
    }
}