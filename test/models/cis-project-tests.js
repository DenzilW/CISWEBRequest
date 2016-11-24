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

    it('saveToHtml', function() {
        // Act
        const html = cisproject.saveToHtml();

        // Assert
        expect(html).to.equal("html", "result of saveToHtml should be 'html'");
    })    
})