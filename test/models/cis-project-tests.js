import {expect} from 'chai';
import 'aurelia-polyfills';
import {CisProject} from './../../src/models/cis-project';

describe('Cisproject Tests', function() {
    let cisproject;

    beforeEach(function() {
        cisproject = new CisProject ();
    });
    
    it('constructor', function() {
        expect(cisproject).to.not.be.null;
    });
    
    it('not constructor', function() {
        expect(() => CisProject()).to.throw("Cannot call a class as a function");
    });

    it('saveToEmail', function() {
        // Arrange
        const cisProject = new CisProject();
        cisProject.projectNumber = "0009";
        cisProject.requester = "DREW";
        cisProject.typeOfRequest = "Blue Print";
        cisProject.databaseLocation = "DB";

        // Act
        const emailTemplate = cisProject.saveToEmail();

        // Assert
        expect(emailTemplate.length).to.be.above(0, "emailtemplate should have some length");
        expect(emailTemplate.indexOf('Project Number: 0009')).to.be.above(-1, "project number text not set correctly");
        expect(emailTemplate.indexOf('Requester: DREW')).to.be.above(-1, "requester text not set correctly");
        expect(emailTemplate.indexOf('Type Of Request: Blue Print')).to.be.above(-1, "db text not set correctly");
        expect(emailTemplate.indexOf('Database backup location: DB')).to.be.above(-1, "db text not set correctly");
    })

    it('validateError', function() {
        // Arrange
        const cisProject = new CisProject();

        // Act
        const validMessage = cisProject.validate();

        // Assert
        expect(validMessage.length).to.be.above(0, "validMessage should have some length");
        expect(validMessage.indexOf('Project Number must have a value')).to.be.above(-1, "project number error not set correctly");
        expect(validMessage.indexOf('Requester must have a value')).to.be.above(-1, "Requester error not set correctly");
        expect(validMessage.indexOf('Type Of Request must have a value')).to.be.above(-1, "Type Of Request error not set correctly");
        expect(validMessage.indexOf('Database Location must have a value')).to.be.above(-1, "Database Location error not set correctly");
    })

    it('validate', function() {
        // Arrange
        const cisProject = new CisProject();
        cisProject.projectNumber = "0009";
        cisProject.requester = "DREW";
        cisProject.typeOfRequest = "Blue Print";
        cisProject.databaseLocation = "DB";
        // Act
        const validMessage = cisProject.validate();

        // Assert
        expect(validMessage.length).to.be.eq(0,"validMessage length must zero");
    })
});