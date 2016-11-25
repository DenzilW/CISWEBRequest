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
        // Act
        const html = cisproject.saveToEmail();

        // Assert
        expect(html).to.equal("html", "result of saveToEmail should be 'html'");
    })    
})