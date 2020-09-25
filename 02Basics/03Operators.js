// D = ((L-S) / L)*100;

var sellingPrice = 199;
var listPrice = 799;
var discount = ((listPrice - sellingPrice) / listPrice) * 100;
console.log("Discount Percentage is : ", discount);
console.log("Rounded Discount : ", Math.round(discount), " %off");

var result = listPrice > sellingPrice;
console.log(result);
