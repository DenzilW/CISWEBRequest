/*
    Denzil Williams:
    Model for holding information about the project
*/
import {ReportBase} from './report-base';

export class CisProject extends ReportBase{
    projectnumber = null;
    requester = null;
    typeofrequest = null;
    databaselocation = null;

    saveToHtml() {
        // todo: return real html
        return "html";
    }
}