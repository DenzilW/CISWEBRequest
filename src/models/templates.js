/**
 * Created by Johan Rabie on 2016/11/25.
 */

export const projectEmailTemplate =
`
Project
---------------------------------------------
Project Number: {projectNumber}
Requester: {requester}
Type Of Request: {typeOfRequest}
Database backup location: {databaseLocation}
`;

export const reportEmailTemplate =
`
Type Of Report: {typeOfReport}
Usage: {usage}
Page Layout: {pageLayout}
Purpose of the report: {purposeOfReport}
Report Title: {reportTitle}
Formatting - specific requirements for colours, fonts: {formattingStyle}
`

export const parameterHeader =
`
Report parameters that you would like to filter the data on
---------------------------------------------
Parameter               | Show parameter values on report?
---------------------------------------------
`

export const parameterEmailTemplate = 
`
{prameter}                  | {showOnReport}
---------------------------------------------
`;

export const chartEmailTemplate = 
`
Chart
What must the chart display / achieve?: {chartAchieve}
Chart Type: {chartType}
Chart Title: {chartTitle}
X-axis title: {xAxisTitle}
Y-axis title - primary axis: {yAxisTitlePrimary}
Y-axis title - secondary axis (if used): {yAxisTitleSecondary}
On Key fields to be used
---------------------------------------------
Axis                | Screen in On Key  |  Field in On Key  | Add data labels   | Trendline required
---------------------------------------------
X axis              | {axisScreen}        | {axisFieldInOnkey}| {axisAddDataLabels}   |  {axisTrendlineRequired}
Field to group on (for stacked charts only) |       | {fieldToGroupFieldInOnkey}  | {fieldToGroupAddDataLabels} | {fieldToGroupTrendlineRequired}
Y axis - primary    | {yAxisPrimaryScreen}    | {yAxisPrimaryFieldInOnkey}  | {yAxisPrimaryAddDataLabels} | {yAxisPrimaryTrendlineRequired}
Y axis - secondary (if used)    | {yAxisSecondaryScreen}  | {yAxisSecondaryFieldInOnkey}    | {yAxisSecondaryAddDataLabels   | yAxisSecondaryTrendlineRequired}
Totals  : {totals}
Sort Order  : {sortOrder}
Any additional requirements for the chart? : {additionalRequirements}
`;

export const reportDataEmailTemplate = 
`
Report data
Report data title: {reportDataTitle}
---------------------------------------------
Screen in On Key    | Field in On Key| Sort order
---------------------------------------------
On Key fields to be used
---------------------------------------------
Screen in On Key    | Field in On Key| Field title on report    | Sort order
---------------------------------------------
Report data to include totals?  : {reportIncludeTotals}
Any additional requirements for the report data?: {additionalReportData}
`;

