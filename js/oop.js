
const country = {
    name: "Spain",
    population: 40000,
    description: function (){
        return this.name + " " + this.population;
    }
}

console.log(country.name); // Nokta notasyonu
console.log(country["name"]); // Array notasyonu

console.log(country.description());

// DRY - Dont Repeat Yourself


const job1 = {
    role: "Blockchain Developer",
    salary: 100000,
    applicationLink: "link",
    isRemote: false
}

class Job {
    constructor(role, salary, applicationLink, isRemote){
        this.role = role;
        this.salary = salary;
        this.applicationLink = applicationLink;
        this.isRemote = isRemote;
    }
}

const job2 = new Job(
    "Software Engineer", 
    200000,
    "link2",
    true
)

const job3 = new Job(
    "Designer",
    1900000,
    "link3",
    false
)

class Car1 {
    constructor(color,brand,year,price,range){
        this.color = color;
        this.brand = brand;
        this.year = year;
        this.price = price;
        this.range = range;
    }

    start(){
        return this.brand + " Car started!"
    }

    stop(){
        return "Car stopped!"
    }
}

const bmw = new Car1("Black","BMW",1977,50000, 150000);

console.log(bmw.start());
console.log(bmw.stop());

// Getters and Setters

class Client {
    constructor(name,age,tc){
        this._name = name;
        this._age = age;
        this._tc = tc;
    }

    static clientCount = 0;

    static increaseClientCount(){
        this.clientCount++;
    }

    get tc(){
        if(userType === "Lawyer"){
            return this._tc;
        } else{
            return "You are not allowed"
        }
    }

    set tc(newTc){
        if(userType === "Lawyer"){
            this._tc = newTc;
        } else{
            return "You are not allowed"
        }
    }
}

let userType = "Lawyer";
const person = new Client("John",45,1256);


person.tc = 1902;

console.log(person.clientCount);
console.log(Client.clientCount);

class Dog {
    constructor(color,eyeColor,height,length,weight){
        this.color = color;
        this.eyeColor = eyeColor;
        this.height = height;
        this. length = length;
        this.weight = weight;
    }

    sit(){
        return "Sit";
    }

    layDown(){
        return "Lay Down";
    }

    shake(){
        return "Shake";
    }

    come(){
        return "Come";
    }
}

const myDog = new Dog("Yellow","Brown",17,35,24);

console.log(myDog);




//  INHERITANCE kismina gectik

class Animal{
    constructor(name,species,color){
        this._name = name;
        this._species = species;
        this._color = color;
    }

    makeSound(){
        console.log(this._name + " makes sound");
    }
}

class Bird extends Animal{

    constructor(name,species,color,eyeColor){
        super(name,species,color);
        this._eyeColor = eyeColor;
    }

    fly(){
        console.log(this._name + " flies.")
    }

    makeSound(){
        console.log(this._name + " cik cik cik")
    }

}

// Override 
// Kus bir hayvandir 

const bird = new Bird("Mavis","Parrot","Blue");

console.log(bird);

bird.fly();
bird.makeSound();


const animal = new Animal("Animal","Animal species","Yellow");

console.log(animal);

class Car{
    constructor(range,model){
        this.range = range;
        this.model = model;
    }

    getModelRange(){
        return this.range + " " + this.model;
    }
}

class ElectricCar extends Car{
    constructor(range,model,battery){
        super(range,model);
        this.battery = battery;
    }

    charge(){
        return this.model + " is charging..."
    }

}

class SelfDrivingCar extends ElectricCar{
    constructor(range,model,battery,auto){
        super(range,model,battery);
        this.auto = auto;
    }

    drive(){
        return this.model + " AI is driving"
    }
}

let mercedes = new SelfDrivingCar(0,"Mercedes",100,"Autopilot");
console.log(mercedes.getModelRange());
console.log(mercedes.charge());
console.log(mercedes.drive());


// ENCAPSULATION ve Private-Public-Protected Degiskenler

class Person{
    #name;
    #surname
    constructor(name,surname,age){
        this.#name = name; // Private degisken
        this.#surname = surname; // Private degisken
        this._age = age; // Public degisken ama protected logic
    }

    get name(){
        return this.#name
    }

    set name(newName){
        this.#name = newName;
    }

    get surname(){
        return this.#surname
    }

    set surname(newSurname){
        this.#surname = newSurname;
    }

    get age(){
        return this._age;
    }

    /**
     * Bu sekilde protected hale geliyor
     */
    set age(newAge){
        if(newAge < 0){
            newAge = 0;
        }
        this._age = newAge;
    }

    /**
     * bu sekilde de cagirabiliriz ama get ile direk cagirabiliyoruz.
     */
    getName(){
        return this.#name;
    }
}

let p = new Person("John","GT",20);

console.log(p.name);
console.log(p.getName()); // bu sekilde de cagirabiliriz

p.name = "Mustafa"
// ismi SET etmek istedik ama degismedi. ardindan set methodu ekledik bu sefer oldu
console.log(p.name);
// getter ve setter sayesinde private verilerde degisiklik yapilabiliyor.
p.age = -100
console.log(p.age);