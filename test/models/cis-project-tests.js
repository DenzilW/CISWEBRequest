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
     //   cisProject.projectNumber = "0009"; 
     //  cisProject.request = "DREW";
      //  cisProject.databaseLocation = "DB"

        // Act
        const emailTemplate = cisproject.saveToEmail();

        // Assert
       // expect(this.emailTemplate.projectNumber).to.equal("0009", "result of saveToEmail should be 'html'");
    })    
})