/*
    Denzil Williams:
    Model for holding information about the project
*/
import {ReportBase} from './report-base';

export class CisProject extends ReportBase{
    projectNumber = null;
    requester = null;
    typeOfRequest = null;
    databaseLocation = null;

    saveToHtml() {
        // todo: return real html
        return "html";
    }
}