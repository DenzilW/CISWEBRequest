/**
 * Created by Johan Rabie on 2016/11/25.
 */

export const emailTemplate =
`mailto:support@pragmaworld.net?subject={subject}&body={body}`;

export const projectEmailTemplate =
`
Project
===================================================================================================
Project Number                                          : {projectNumber}
Client                                                  : {client}
Requester                                               : {requester}
Requester Email Address                                 : {requesterEmailAddress}
Type Of Request                                         : {typeOfRequest}
On Key Connection Path                                  : {onkeyConnectionPath}
On Key Username                                         : {onkeyUsername}
On Key Password                                         : {onkeyPassword}
Database backup location                                : {databaseLocation}
`;

export const otherDBLocation =
`Other database location                                 : {otherDatabaseLocation}`;
   
export const reportEmailTemplate =
`
Type Of Report                                          : {typeOfReport}
Standard/Custom                                         : {standardcustomreport} 
Usage                                                   : {usage}
`

export const reportManagerReportTemplate =
`
Notification Manager Report                             : {notificationManagerReport}
`

export const reportEmailTemplate2 =
`
Page Layout                                             : {pageLayout}
Purpose Of The Report                                   : {purposeOfReport}
Report Title                                            : {reportTitle}
Formatting - specific requirements for colours, fonts   : {formattingStyle}
`

export const parameterHeader =
`
Report parameters that you would like to filter the data on
===================================================================================================
`

export const parameterEmailTemplate =
`
Parameter                                               : {prameter} 
On Key Field                                            : {onkeyField} 
Show Parameter Values On Report?                        : {showOnReport}
`;

export const chartEmailTemplate = 
`
Chart Properties
===================================================================================================
Chart                                                   : {chartTitle}
What must the chart display / achieve?                  : {purposeOfChart}
Chart Type                                              : {chartType}
Other                                                   : {chartTypeOther}

Dimension
---------------------------------------------------------------------------------------------------
On Key Field Name                                       : {dimensionOnkeyFieldName}               
Axis Label                                              : {dimensionyAxisLabels}         

Measure
---------------------------------------------------------------------------------------------------
On Key Field                                            : {measureOnkeyField}               
Calculation For Measure                                 : {measureCalculation}         
Axis Labels                                             : {measureAxisLabels}       
Data Labels                                             : {measureAxisDataLabels}   
Sort Order                                              : {sortOrder}
Any additional requirements for the chart?              : {hasAdditionalRequirements}
{additionalRequirements}
`;

export const reportDataEmailTemplate = 
`
Report Data
===================================================================================================

Report Data Title                                       : {reportDataTitle}
`;

export const reportDataOnKeyFieldsEmailTemplate = 
`
Field In On Key                                         : {fieldInOnKey}       
Group                                                   : {group}  
Total                                                   : {total}
Show On Report                                          : {showonreport}
`;
