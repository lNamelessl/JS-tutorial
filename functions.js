
// classes
class Vehicle{
    static price = 1000;
    constructor(make, model, year){
        this.make = make,
        this.model = model,
        this.year = year
    }
    drive(){
        console.log(`You drive ${this.make} of model ${this.model} of year ${this.year}`)
    }
}

// Inheritance
class newVehicle extends Vehicle{

}
car3 = new newVehicle("Tesla", "Model X", "2022")
car3.drive()


car2 = new Vehicle("mercedez", "Benz", "2025");
car2.drive();

console.log(Vehicle.price);

// constructors
function Car(make, model, year){
    this.make = make,
    this.model = model,
    this.year = year,
    this.drive = function(){console.log(`you drive ${this.make} of model ${this.model} of year ${this.year}`)}

}
car1 = new Car("Mercedez", "Benz", "2024")
console.log(car1.drive())

// objects
person1 = {
    "firstName": "Spongebob",
    "lastName": "Squarepants",
    "sayHello": function(){console.log(`Hello my name is ${this.firstName} ${this.lastName}`)}
};
person1.sayHello();

let numbers = [10, 11, 12, 17, 18, 20, 22]

// Arrow fucntions
const evenNums = numbers.filter((element) => element % 2 === 0);
console.log(evenNums);

// funcition expresssions


minorAges = numbers.filter(function(element){
    return element < 18
});
console.log(minorAges);



// filter
adultAges = numbers.filter(isAdult);
console.log(adultAges);

function isAdult(element){
    return element >= 18 ;
}

// functions
let email = "fakefakemail.com"
const myH1 = document.getElementById("myH1");


function isValidEmail(email){
    return email.includes("@") ? true : false;
}   

console.log(isValidEmail(email)); 


// callbacks
function hello(){
    console.log(`Hello`)
}

function goodbye(){
    console.log(`Goodbye`)
}

hello(goodbye())

// For Each Method
let fruits = ["apple", "banana", "mango"];
fruits.forEach(capitalize);
fruits.forEach(display);


function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1)
}

function display(element){
    console.log(element)
}

// map
const dates = ["2025-6-6", "2025-4-4", "2025-8-9"];
let formattedDates = dates.map(formatDates);
console.log(formattedDates);

function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`
}


