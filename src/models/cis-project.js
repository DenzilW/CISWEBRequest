/*
    Denzil Williams:
    Model for holding information about the project
*/
import {ReportBase} from './report-base';
import {projectEmailTemplate} from './templates';

export class CisProject extends ReportBase{
    projectNumber = null;
    requester = null;
    typeOfRequest = null;
    databaseLocation = null;

    dispose() {
        // clean up properties here if any.
    }

    saveToEmail() {
        return projectEmailTemplate
            .replace("{projectNumber}", this.projectNumber)
            .replace("{requester}", this.requester)
            .replace("{typeOfRequest}", this.typeOfRequest)
            .replace("{databaseLocation}", this.databaseLocation)
    }
}