/*
    Denzil Williams:
    Model for holding information about the project
*/
import {ReportBase} from './report-base';

export class CisProject extends ReportBase{
    projectNumber;
    requester;
    typeOfRequest;
    databaseLocation;

    saveToEmail() {
        const emailTemplate = 		
            `
                Project
                ---------------------------------------------
                        Project Number: ${projectNumber}
                        Requester: ${requester}
                        Type Of Request: ${databaseLocation}
            `;

		return emailTemplate		
	            .replace('${projectNumber}', this.projectNumber)
                .replace('${requester}', this.requester)
                .replace('${typeOfRequest}', this.typeOfRequest)
                .replace('${databaseLocation}', this.databaseLocation) ;               
    }
}