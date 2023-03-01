// array vs object 
var shoppingItems = ['books', 'sunglass', 'shoes', 'pen'];

var friendsAge = [23, 54, 34, 13, 53,];
var friendsAge = {
    rahim: 23,
    samad: 54,
    karim: 34,
    jamil: 13,
    kafi: 53
}

// object looping 

var shopingCard = {
    books: 5,
    mouse: 2,
    pen: 20,
    sunglass: 1,
    shoes: 2
}

const keys = Object.keys(shopingCard);
console.log(keys);
const values = Object.values(shopingCard);
console.log(values);

for (var i = 0; i < keys.length; i++) {
    var propertyName = keys[i];
    var propertiesVlue = shopingCard[propertyName];
    // console.log(propertyName, propertiesVlue);
}

// for in loop 

for (var propertyName in shopingCard) {
    const value = shopingCard[propertyName];
    console.log(propertyName, value);
}