/**
 * Created by Johan Rabie on 2016/11/25.
 */

export const emailTemplate =
`
mailto:support@pragmaworld.net?subject={subject}&body={body}
`

export const projectEmailTemplate =
` 
Project
-------------------------------------------------------------------------------
Project Number                                          : {projectNumber}
Client                                                  : {client}
Requester                                               : {requester}
Requester Email Address                                 : {requesterEmailAddress}
Type Of Request                                         : {typeOfRequest}
Onkey Connection Path                                   : {onkeyConnectionPath}
Onkey Username                                          : {onkeyUsername}
Onkey Password                                          : {onkeyPassword}
Database backup location                                : {databaseLocation}
`;
   
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
Purpose of the report                                   : {purposeOfReport}
Report Title                                            : {reportTitle}
Formatting - specific requirements for colours, fonts   : {formattingStyle}
-------------------------------------------------------------------------------
`

export const parameterHeader =
`
Report parameters that you would like to filter the data on
`

export const parameterEmailTemplate =
`
-------------------------------------------------------------------------------
Parameter                                               | {prameter} 
Onkey field                                             | {onkeyfield} 
Show parameter values on report?                        | {showOnReport}
-------------------------------------------------------------------------------
`;

export const chartEmailTemplate = 
`
Chart Properties
----------------
Chart                                                   : {chartTitle}
What must the chart display / achieve?                  : {purposeOfChart}
Chart Type                                              : {chartType}
Other                                                   : {chartTypeOther}
Dimension
-------------------------------------------------------------------------------
OnKey Field Name                                        : {dimensionOnkeyFieldName}               
Axis Label                                              : {dimensionyAxisLabels}         
-------------------------------------------------------------------------------
Measure
-------------------------------------------------------------------------------
OnKey Field                                             : {measureOnkeyField}               
Calculation for measure                                 : {measureCalculation}         
Axis Labels                                             : {measureAxisLabels}       
Data labels                                             : {measureAxisDataLabels}   
-------------------------------------------------------------------------------
Sort Order                                              : {sortOrder}
Any additional requirements for the chart? : 
{additionalRequirements}
-------------------------------------------------------------------------------
`;

export const reportDataEmailTemplate = 
`
Report data
-----------
Report data title                                       : {reportDataTitle}
`;

export const reportDataOnKeyFieldsEmailTemplate = 
`
-------------------------------------------------------------------------------
Field in On Key                                         :  {fieldInOnKey}       
Group                                                   :  {group}  
Total                                                   :  {total}
Show onreport                                           :  {showonreport}
-------------------------------------------------------------------------------
`;
