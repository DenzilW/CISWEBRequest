import {expect} from 'chai';
import 'aurelia-polyfills';
import {CisParameters, CisParameter} from './../../src/models/cis-parameters';

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

describe('CisParameter Tests', function() {
    let parameter;

    beforeEach(function() {
        parameter = new CisParameter ();
    });

    it('constructor', function() {
        expect(parameter).to.not.be.null;
    });

    it('dispose', function() {
        // Arrange
        parameter.value = "1";
        parameter.showOnReport = true;

        // Act
        parameter.dispose();

        // Assert
        expect(parameter.value).to.be.null;
        expect(parameter.showOnReport).to.be.null;
    })
});