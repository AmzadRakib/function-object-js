var shopingCard = {
    books: 5,
    mouse: 2,
    pen: 20,
    sunglass: 1
}

// dynamic way to get properties value 
// way number 1 get value 
var penCount = shopingCard.pen;
console.log(penCount);

// Way Number 2  get value
var penCount2 = shopingCard['pen'];
console.log(penCount2);

// way Number 3 to get properties
var propertyName = "mouse"
var penCount3 = shopingCard[propertyName];
console.log(propertyName, penCount3);

// get only object properties (keys) Name 

var properties = Object.keys(shopingCard);
console.log(properties);

// get only object properties (keys) Value 
var propertiesVlue = Object.values(shopingCard);
console.log(propertiesVlue);

// dynamic way to set properties value

// way Number 1 
shopingCard.mouse = 10;
console.log(shopingCard.mouse);

// way number 2 set property value
shopingCard['pen'] = 13;
console.log(shopingCard['pen']);

// way number 3 set propety value 

shopingCard[propertyName] = 15
console.log(shopingCard.mouse)
