

// Conditional Statements if - else if - else

let a = 6;

switch(a > 5){
    case false:
        console.log(a + " 5 ten büyük degil.");
        break;
    case true:
        console.log(a + " 5 ten büyük.");
        break;
    default:
        console.log("Default")
}

let newDate = new Date();

console.log("new date " + newDate.getDay());

// getDay deger olarak 0 dan baslar ve ilk gün Sunday dir
// Sunday:0 Monday:1 ...

switch(newDate.getDay()){
    case 0: 
        console.log("Sunday");
        break;
    case 1: 
        console.log("Monday");
        break;
    case 2: 
        console.log("Tuesday");
        break;
    case 3: 
        console.log("Wednesday");
        break;
    case 4: 
        console.log("Thursday");
        break;
    case 5: 
        console.log("Friday");
        break;
    case 6: 
        console.log("Saturday");
}

switch(newDate.getDate()){
    case 4: case 5:
        console.log("Haftasonuna yaklastiniz");
        break;
    case 0: case 6:
        console.log("Haftasonu");
        break;
    default:
        console.log("Calismaya devam et köle :)");
}

// nested olarak kullanim da olabilir, ic ice switch ler kullanilabilir


// Loops

let i = 1, n=5;

while (i<=n) {
    console.log("While loop " + i);
    i++;
}
/*
let number = parseInt(prompt("Enter a number")); // type number a cevirdik
let sum = 0
while (number >= 0) {
    sum = sum + number; // ya da direk sum += number seklinde de yazilabilir.
    number = parseInt(prompt("Enter a number"));
}
console.log(sum);
*/

/*    
let sum = 0, number=0;
do {
    sum+=number;
    number = parseInt(prompt("Enter a number")); // type number a cevirdik
} while(number >= 0)

console.log(sum);
*/

/*
for (let sum = 0, number=0; number>=0; sum+=number) {
    number = parseInt(prompt("Enter a number"));
    if(number<0){
        console.log(sum);
        break;
    }
}
*/

for(let k=1, l=5; k<=l; ++k){
    console.log("For loop " +k);
}

let arr=[];
for (let x=1; x<=50; x++){    
    if (x % 2 == 0) {
        arr.push(x)
    }
}
console.log(arr);

let cars = ["mazda", "opel", "tofas", "bmw"]

for (let index = 0; index < cars.length; index++) {
    console.log(cars[index]);    
}

let numbers=[];
for (let x=1; x<=40; x++){    
    if (x % 5 == 0) {
        if (x % 3 == 0) {
            numbers.push(x)    
        }
    }
}
console.log(numbers);

let numberss=[];
for (let x=1; x<=40; x++){    
    if ((x % 5 == 0) && (x % 3 == 0)) {
            numberss.push(x);
    }
}
console.log(numberss);

/*
let hedef = Math.floor(Math.random()*100) + 1;
let tahmin;

while(true){
    tahmin = parseInt(prompt("Bir tahmin giriniz"));
    if(tahmin > hedef){
        alert("Büyük sayi girdiniz");
    }
    else if(tahmin < hedef){
        alert("Kücük sayi girdiniz");
    }
    else if( tahmin == hedef){
        alert("Tebrikler");
        break;
    }
}
 */