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
}