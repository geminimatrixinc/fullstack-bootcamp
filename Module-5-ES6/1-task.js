
var total = 100;
var HST_TAX = 0.13;

function calculateTaxes (total) {
    var result = total * HST_TAX;
    console.log('The total tax is ' + result);
    return result;
}

var calculateTotal = function(subTotal) {
    var taxes = calculateTaxes(subTotal);
    var result = subTotal + taxes;

    console.log('The total is : ' + result)
    return result;
}

calculateTotal(500);
