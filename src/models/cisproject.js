export class CisProject {
         projectnumber;
         requester;
         typeofrequest;
         databaselocation;

         constructor(projectnumber,
         requester,
         typeofrequest,
         databaselocation) {
             this.projectnumber = projectnumber;
             this.requester = requester;
             this.typeofrequest = typeofrequest;
             this.databaselocation = databaselocation
         }
 }