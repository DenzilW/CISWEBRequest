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
        expect(newCount).to.be.equal(count + 1,"Expect count to be greater than 0")
    });

    it("removeAt", function() {
        // Arrange
        const param1 = cisParameters.add();
        param1.value = "param1";

        const param2 = cisParameters.add();
        param2.value = "param2";

        const param3 = cisParameters.add();
        param3.value = "param3";

        // Act 
        const removedItem = cisParameters.removeAt(1);

        // Assert
        expect(cisParameters.items.indexOf(removedItem)).to.be.equal(-1,"Expect item not be included")
        expect(removedItem).to.be.not.equal(param2.value, "Expected that param2 must be removed")
    })

   it("remove", function() {
        // Arrange
        const param1 = cisParameters.add();
        param1.value = "param1";

        const param2 = cisParameters.add();
        param2.value = "param2";

        const param3 = cisParameters.add();
        param3.value = "param3";

        // Act 
        cisParameters.remove(param1);

        // Assert
        expect(cisParameters.items[0].value).to.be.not.equal(param1.value, "Expected that param1 must be removed")
    })
})