/*
    Denzil Williams:
    Model for holding information about the project
*/

// @flow

import {ReportBase} from './report-base';
import {projectEmailTemplate} from './templates';

export class CisProject extends ReportBase{
    projectNumber: string;
    requester: string;
    typeOfRequest: string;
    databaseLocation: string;

    dispose() {
        // nothing to clean here because these are just strings
    }

    saveToEmail() {
        return projectEmailTemplate
            .replace("{projectNumber}", this.projectNumber)
            .replace("{requester}", this.requester)
            .replace("{typeOfRequest}", this.typeOfRequest)
            .replace("{databaseLocation}", this.databaseLocation)
    }

    validate() {
        let validMessage: string;
        validMessage = "";
    
        if (this.projectNumber == undefined || this.projectNumber.length == 0) {
            validMessage = "Project Number must be filled out\n";
        }

        if (this.requester == undefined || this.requester.length == 0) {
            validMessage += "Requester must be filled out\n";
        }

        if (this.typeOfRequest == undefined || this.typeOfRequest.length == 0) {
            validMessage += "Type Of Requester must be filled out\n";
        }
        
        if (this.databaseLocation == undefined || this.databaseLocation.length == 0) {
            validMessage += "Database Location must be filled out\n";
        }

        return validMessage;   
    }
}