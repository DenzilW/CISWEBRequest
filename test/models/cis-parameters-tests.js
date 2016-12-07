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

    it('saveToEmail', function() {
        // Arrange
        const cisParameter = new CisParameter();
        cisParameter.value = "AssetCode";
        cisParameter.showOnReport = "true";
        cisParameter.yAxisSecondaryScreen = " Screen";

        // Act
        const emailTemplate = cisParameter.saveToEmail();

        // Assert
        expect(emailTemplate.length).to.be.above(0, "emailtemplate should have some length");
        expect(emailTemplate.indexOf('AssetCode')).to.be.above(-1, "value text not set correctly");
        expect(emailTemplate.indexOf('true')).to.be.above(-1, "showOnReport text not set correctly");
    })


describe('CisParameter Tests', function() {
    let parameter;

    beforeEach(function() {
        parameter = new CisParameter ();
    });

    it('constructor', function() {
        expect(parameter).to.not.be.null;
    });
});