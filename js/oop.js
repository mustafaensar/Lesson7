
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

class Car {
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

const bmw = new Car("Black","BMW",1977,50000, 150000);

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
        this.name = name;
        this.species = species;
        this.color = color;
    }

    makeSound(){
        console.log(this.name + " makes sound");
    }
}

class Bird extends Animal{

    constructor(name,species,eyeColor){
        super(name,species);
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