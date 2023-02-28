// Normal Return 

function add(number1, number2) {
    var sum = number1 + number2;
    return sum;
}
var exicute = add(54, 65);
// console.log(exicute);

function bringSingara(money) {
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}

var myTaka = 150;
var singaras = bringSingara(myTaka);
console.log('Eating Singaras:', singaras);