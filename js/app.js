let a = 5;

console.log("variable: " + a);

// Arrays

let cars = ["Volvo", "BMW", "Tofas"];

console.log("car1: " + cars[0]);
console.log("car1: " + cars[1]);
console.log("car1: " + cars[2]);

let cars2 = new Array(1, 2, 3);

cars.pop(); // las element will be removed

console.log("cars " + cars);

cars.push("Tofas"); // added a new element to last of the list

console.log("cars " + cars);

cars.shift(); // first element will be removed

console.log("cars " + cars);

cars.unshift("Volvo"); // added as first element

console.log("cars " + cars);
console.log("cars " + cars.length);

delete cars[2];

console.log("cars " + cars);
console.log("cars " + cars.length);

let fruits = ["Muz", "Elma", "Mango", "Ananas"];

fruits.sort();

console.log("Fruits " + fruits);

fruits.reverse();

console.log("Fruits " + fruits);

let points = [40, 5, 20, 33, 99];

points.sort(); // BURADA SIRALARKEN SAYININ YANINDA 0 VAR GIBI DUSUNUYOR

console.log("Points " + points);

const newCars = ["Volvo", "BMW", "Tofas"]; // constant yani sabit variable degismez

// newCars = ["Audi", "Toyota", "Volvo"]; bu sekilde komple array degisimi mümkün degil

console.log("newCars " + newCars);

newCars.push("Serce");
// newCars[0] = "Serce";

newCars.reverse();

console.log("newCars " + newCars);

const d = new Date();

console.log("Current Date " + d);


// ISO Date Type (YYYY-MM-DD)
const newDate = new Date("2022-07-02T12:00:00Z");

console.log("newDate " + newDate);

// Math

console.log("Math.PI " + Math.PI);

console.log("Math.round " + Math.round(4.5)); // yuvarlama

console.log("Math.ceil " + Math.ceil(4.2)); // en tavana yuvarla

console.log("Math.floor " + Math.floor(4.8)); // en tabana yuvarla 

console.log("Math.pow " + Math.pow(3,3)); // üslü

console.log("Math.sqrt " + Math.sqrt(4)); // karekök

console.log("Math.min " + Math.min(0, 150, -8, -200)); // dizideki min olan
console.log("Math.max " + Math.max(0, 150, -8, -200)); // dizideki max olan

console.log("Math.random " + Math.random()); // 0 ile 1 arasinda rastgele bir deger üret

console.log("Math.random " + Math.floor(Math.random() * 10));

// 3 ile 7 arasinda random degerler veren kod
console.log("Math.random2 " + Math.floor(Math.random() * 5 + 3));

