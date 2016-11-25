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

    it("removeAt", function() {
        // Arrange
        const chart1 = charts.add();
        chart1.value = "chart1";

        const chart2 = charts.add();
        chart2.value = "chart2";

        const chart3 = charts.add();
        chart3.value = "chart3";

        // Act 
        const removedItem = charts.removeAt(1);

        // Assert
        expect(charts.items.indexOf(removedItem)).to.be.equal(-1,"Expect item not be included")
        expect(removedItem).to.be.not.equal(chart2.value, "Expected that chart2 must be removed")
    })

   it("remove", function() {
        // Arrange
        const chart1 = charts.add();
        chart1.value = "chart1";

        const chart2 = charts.add();
        chart2.value = "chart2";

        const chart3 = charts.add();
        chart3.value = "chart3";

        // Act 
        charts.remove(chart1);

        // Assert
        expect(charts.items[0].value).to.be.not.equal(chart1.value, "Expected that chart1 must be removed")
    })
    
})