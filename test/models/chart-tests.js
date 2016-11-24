import {expect} from 'chai';
import 'aurelia-polyfills';
import {Chart} from './../../src/models/chart';

describe('Chart Tests', function() {
    let chart;

    beforeEach(function() {
        chart = new Chart ();
    });
    
    it('constructor', function() {
        expect(chart).to.not.be.null;
    });
    
    it('not constructor', function() {
        expect(() => Chart()).to.throw("Cannot call a class as a function");
    });    

    it('saveToHtml', function() {
        // Act
        const html = chart.saveToHtml();

        // Assert
        expect(html).to.equal("html", "result of saveToHtml should be 'html'");
    })
})