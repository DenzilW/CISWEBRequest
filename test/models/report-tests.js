import {expect} from 'chai';
import 'aurelia-polyfills';
import {Report} from './../../src/models/report';

describe('Report Tests', function() {
    let report;

    beforeEach(function() {
        report = new Report ();
    });
    
    it('constructor', function() {
        expect(report).to.not.be.null;
    });
    
    it('not constructor', function() {
        expect(() => Report()).to.throw("Cannot call a class as a function");
    });    

    it('saveToEmail', function() {
        // Arrange
        const report = new Report();
        report.typeReport = "Analyser Profile";
        report.usage = "On Key Reports";
        report.pageLayout = "Potrait";
        report.purposeOfReport = "To report on Work Order Data";
        report.reportTitle = "WO Report";
        report.formattingRequirements = "Background:blue";

        // Act
        const emailTemplate = report.saveToEmail();

        // Assert
        expect(emailTemplate.length).to.be.above(0, "emailtemplate should have some length");
        expect(emailTemplate.indexOf('Type Of Report: Analyser Profile')).to.be.above(-1, "Type Of Report text not set correctly");
        expect(emailTemplate.indexOf('Usage: On Key Reports')).to.be.above(-1, "usage text not set correctly");
        expect(emailTemplate.indexOf('Page Layout: Potrait')).to.be.above(-1, "Potrait text not set correctly");
        expect(emailTemplate.indexOf('Purpose of the report: To report on Work Order Data')).to.be.above(-1, "purposeOfReport text not set correctly");
        expect(emailTemplate.indexOf('Report Title: WO Report')).to.be.above(-1, "reportTitle text not set correctly");
        expect(emailTemplate.indexOf('Formatting - specific requirements for colours, fonts: Background:blue')).to.be.above(-1, "formattingRequirements text not set correctly");
    })

})