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

    it('saveToHtml', function() {
        // Act
        const html = report.saveToHtml();

        // Assert
        expect(html).to.equal("html", "result of saveToHtml should be 'html'");
    })

})