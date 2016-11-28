import {expect} from 'chai';
import 'aurelia-polyfills';
import {CisParameters} from './../../src/models/cis-parameters';

describe('CisParameters Tests', function() {
    let cisParameters;

    beforeEach(function() {
        cisParameters = new CisParameters ();
    });
    
    it('constructor', function() {
        expect(cisParameters).to.not.be.null;
        expect(cisParameters.Items).to.not.be.null;
    });
    
    it('not constructor', function() {
        expect(() => CisParameters()).to.throw("Cannot call a class as a function");
    });

    it('add', function() {
        //Arrange
        const count = cisParameters.items.length;

        // Act
        cisParameters.add();
        const newCount = cisParameters.items.length;  
        
        // Assert
        expect(newCount).to.be.equal(count + 1,"Expect count to be greater than 0");
    });
});