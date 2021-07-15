let str = 'some test string';
let val;

val = str.slice(0,1);
val = val.toUpperCase();
val = val.concat(str);
val = val.replace('Ss', 'S');
val = val.replace('g', 'G')
val = str.indexOf(' ', 5);
val = str.slice(5, 9);
val = Math.PI;
val = val.toFixed(2);
val = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
val = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
val = Math.random();
val = val.toFixed(2);
val = Math.floor(Math.random() * 100);
val = 0.6 + 0.7;
val = val.toFixed(1);

let myObject = {
    product: "Iphone"
};

myObject['price'] = 1000;
myObject['currency'] = 'dollar';

myObject.newProperties = {};
myObject.newProperties.model = '12ProMax';
myObject.newProperties.colod = 'Black';

console.log(myObject);