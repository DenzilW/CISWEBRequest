import {expect} from 'chai';
import 'aurelia-polyfills';
import {Charts} from './../../src/models/chart';

describe('Chart Tests', function() {
    let charts;

    beforeEach(function() {
        charts = new Charts ();
    });
    
    it('constructor', function() {
        expect(charts).to.not.be.null;
    });
    
    it('not constructor', function() {
        expect(() => Charts()).to.throw("Cannot call a class as a function");
    });    

    it('saveToEmail', function() {
        // Act
        const html = charts.saveToEmail();

        // Assert
        expect(html).to.equal("html", "result of saveToEmail should be 'html'");
    })

    it('add', function() {
        //Arrange
        const count = charts.items.length;

        // Act
        charts.add();
        const newCount = charts.items.length;  
        
        // Assert
        expect(newCount).to.be.equal(count + 1,"Expect count to be greater than 0")
    });
})