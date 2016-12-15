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

    it('validateError', function() {
        // Arrange
        const report = new Report();

        // Act
        const validMessage = report.validate();

        // Assert
        expect(validMessage.length).to.be.above(0, "validMessage should have some length");
        expect(validMessage.indexOf('Type Of Report must have a value')).to.be.above(-1, "Type Of Report error not set correctly");
        expect(validMessage.indexOf('Usage must have a value')).to.be.above(-1, "Usage error not set correctly");
        expect(validMessage.indexOf('Page Layout must have a value')).to.be.above(-1, "Page Layout error not set correctly");
        expect(validMessage.indexOf('Purpose Of Report must have a value')).to.be.above(-1, "Purpose Of Report error not set correctly");
        expect(validMessage.indexOf('Report Title must have a value')).to.be.above(-1, "Report Title error not set correctly");
    })

    it('validate', function() {
        // Arrange
        const report = new Report();
        report.typeReport = "Analyser Profile";
        report.usage = "On Key Reports";
        report.pageLayout = "Potrait";
        report.purposeOfReport = "To report on Work Order Data";
        report.reportTitle = "WO Report";
        report.formattingRequirements = "Background:blue";
        // Act
        const validMessage = report.validate();

        // Assert
        expect(validMessage.length).to.be.eq(0,"validMessage length must zero");
    })

})