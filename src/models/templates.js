/**
 * Created by Johan Rabie on 2016/11/25.
 */

export const emailTemplate =
`
mailto:denzil.williams@pragmaworld.net?subject={subject}&body={body}
`

export const projectEmailTemplate =
` 
Project
-------------------------------------------------------------------------------
Project Number                                      : {projectNumber}
Client                                              : {client}
Requester                                           : {requester}
Requester Email Address                             : {requesterEmailAddress}
Type Of Request                                     : {typeOfRequest}
Onkey Connection Path                               : {onkeyConnectionPath}
Onkey Username                                      : {onkeyUsername}
Onkey Password                                      : {onkeyPassword}
Database backup location                            : {databaseLocation}
`;
   
export const reportEmailTemplate =
`
Type Of Report       : {typeOfReport}
Usage: {usage}
Page Layout          : {pageLayout}
Purpose of the report: {purposeOfReport}
Report Title         : {reportTitle}
Formatting - specific requirements for colours, fonts: {formattingStyle}
-------------------------------------------------------------------------------
`

export const parameterHeader =
`
Report parameters that you would like to filter the data on
`

export const parameterEmailTemplate =
`
-------------------------------------------------------------------------------
Parameter                           |  {prameter} 
Show parameter values on report?    | {showOnReport}
-------------------------------------------------------------------------------
`;

export const chartEmailTemplate = 
`
Chart {chartTitle}
_______________________________________________________________________________
What must the chart display / achieve?: {chartAchieve}
Chart Type           : {chartType}
Chart Title          : {chartTitle}
X-axis title         : {xAxisTitle}
Y-axis title - primary axis: {yAxisTitlePrimary}
Y-axis title - secondary axis (if used): {yAxisTitleSecondary}
On Key fields to be used
-------------------------------------------------------------------------------
Axis                 | X axis               
Screen in On Key     | {xAxisScreen}         
Field in On Key      | {xAxisFieldInOnkey}       
Add data labels      | {xAxisAddDataLabels}   
Trendline required   | {xAxisTrendlineRequired}
-------------------------------------------------------------------------------
Axis                 | Y axis - primary               
Screen in On Key     | {yAxisPrimaryScreen}         
Field in On Key      | {yAxisPrimaryFieldInOnkey}       
Add data labels      | {yAxisPrimaryAddDataLabels}   
Trendline required   | {yAxisPrimaryTrendlineRequired}
-------------------------------------------------------------------------------
Axis                 | Y axis - secondary (if used)               
Screen in On Key     | {yAxisSecondaryScreen}         
Field in On Key      | {yAxisSecondaryFieldInOnkey}       
Add data labels      | {yAxisSecondaryAddDataLabels}   
Trendline required   | {yAxisSecondaryTrendlineRequired}
-------------------------------------------------------------------------------
Axis                 | Field to group on (for stacked charts only)               
Field in On Key      | {fieldToGroupFieldInOnkey}       
Add data labels      | {fieldToGroupAddDataLabels}   
Trendline required   | {fieldToGroupTrendlineRequired}
-------------------------------------------------------------------------------
Totals               : {totals}
Sort Order           : {sortOrder}
Any additional requirements for the chart? : 
{additionalRequirements}
-------------------------------------------------------------------------------
`;

export const reportDataEmailTemplate = 
`
Report data
Report data title: {reportDataTitle}
`;

export const reportDataGroupingItemEmailTemplateHeader =
`
What would you like the report data to be grouped on?

Grouping Information
===============================================================================
`;

export const reportDataGroupingItemEmailTemplate =
`
-------------------------------------------------------------------------------
Screen in On Key     |  {screenInOnkey}     
Screen in On Key     |  {fieldInOnkey}   
Sort order           |  {sortOrder}
-------------------------------------------------------------------------------
`;

export const reportDataGroupingItemEmailTemplateFooter =
`
===============================================================================
`;

export const reportDataOnKeyFieldsHeaderEmailTemplate = 
`
On Key fields to be used
===============================================================================
`;

export const reportDataOnKeyFieldsEmailTemplate = 
`
-------------------------------------------------------------------------------
Screen in On Key     |  {screenInOnKey}     
Field in On Key      |  {fieldInOnKey}       
Field title on report|  {fieldTitleOnReport}  
Sort order           |  {sortOrder}
-------------------------------------------------------------------------------
`;

export const reportDataFooterEmailTemplate = 
`
Report data to include totals?  : {reportIncludeTotals}
Any additional requirements for the report data?: 
{additionalReportData}
`;

