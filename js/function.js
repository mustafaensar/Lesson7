// Functions

function nameOfFunction() {
    console.log("Hello function");
}

nameOfFunction();

/**
 * Fonksiyona baslangic parametreleri de belirtebilirsiniz
 * function add(a = 2, b = 10) {
    console.log(a+b);
}
 */

function add(a,b) {
    //console.log(a+b);
    return a+b;
}

/**
 * Boolean degerlerin de rakamsal karsiligi var
 * true 1
 * false 0
 * seklinde hareket ediyor
 */

add(2,10);

add(20,30);

/*
let first = parseInt(prompt("Enter first number"));
let second = parseInt(prompt("Enter second number"));

// add(first,second);

let result = add(first,second);
console.log("result " + result);
*/

function check(param){
    if(param == 0){
        return "The number is zero";
    }
    else if(param < 0){
        return "The number is negative";
    }
    else if(param > 0){
        return "The number is positive";
    }
}

console.log(check(-1));
console.log(check(0));
console.log(check(1));

/**
 * 3 adet sayi kullanicidan prompt ile alinacak
 * 3 adet girilen sayidan en büyük olani döndür
 */

/*
function checkNumbers(a,b,c) {
    console.log("Max " + Math.max(a,b,c));
}

let value1= parseInt(prompt("Enter first number"));
let value2= parseInt(prompt("Enter second number"));
let value3= parseInt(prompt("Enter third number"));

checkNumbers(value1,value2,value3);
*/


/*
function count(a){
    let result = 1;
    if(a < 0){
        console.log("Please enter a valid number");
    }else if(a == 0){
        console.log("Result = 1")
    }else if(a > 0){
        for (let i = 1; i <= a; i++) {
            result = result*i;
        }return result;
    }
}

let value= parseInt(prompt("Enter a number"));
console.log(count(value));
*/

/*
let value = prompt("Enter your word");

function reverse(param){
    let string = param.split("").reverse().join("");
    return string;
}
console.log(reverse(value));
*/

/*
let str2 = "";
function ters(){
    for (let i = value.length - 1; i >= 0; i--){
        str2 += value[i];
    }return str2;
}
ters();
console.log(str2);(
*/

var scope = "Global"; // Global Variable

console.log(scope);

function access(){
    let car = "BMW"; // Local Variable
    console.log(car);
}

access();

// console.log(car);

function food (){
    var fruit = "Apple";
    let vegetable = "Broccoli";
    const drinks = "Cola";
}

/**
 * 
 * YUKARIDA FONKSIYON ICINDE BELIRTILENLER LOCAL OLDUGUNDAN DISARIDAN ULASAMIYORUZ
console.log(fruit);
console.log(vegetable);
console.log(drinks);
*/


// OBJECTS
// key & values seklinde yaziliyor
// array ve obje ic ice kullanilabilir.
// GENELDE OBJELERE . notation ILE ULASILIR

let people = [{firstName: "Michael", lastName: "Mic", age: 35}];
const person = {firstName: "Michael", lastName: "Mic", age: 35, things: ["asd", "asdasd"]};

console.log(people[0].age);
console.log(person.things);
console.log(person["firstName"]);

const person2 = {
    firstName: "John",
    lastName: "Doe",
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};

let nameSurname = person2.fullName();
let nameSurname2 = person2["fullName"];

console.log(nameSurname);
console.log(nameSurname2); // KÖSELI PARANTEZ ILE ULASAMIYORUZ

const person3 = {
    firstName: "Michael",
    lastName: "Doe",
    age: 35
};

const myArray = Object.values(person3);

console.log(myArray);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

// ARRAY ELEMANLARINA foreach ILE DE ULASABILIRIZ

myArray.forEach(person => {
    console.log(person);
});

var arr = ["a","b","c"];

arr.forEach(function(element, index){
    console.log(element, index);
});

const student = {
    name: "John",
    age: 20,
    lessons: {
        math: 70, 
        science: 20
    }
}

console.log(student.lessons.math);


// in STATEMENT ILE BU ISIMDE BIR KEY VAR MI DIYE SORABILIYORUZ
console.log("lessons" in student); 
console.log("math" in student.lessons);

student.lessons.math = 90; // KEYLERE ULASIP DEGISIKLIK YAPILABILIR

for(let key in student){
    console.log(key);
    console.log(student[key])
}