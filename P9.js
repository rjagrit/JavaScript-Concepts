//What is Prototype in JavaScript ?
// Prototype is an object that is obtained when object is made. 
// Prototype Contains methods and Properties that can be inherited by the Object made to perfrom further task. 

const a = ["Apple","Mango"]
console.log(a);


//We can also use defined function of one object in other object by setting other object protoype by 1st object

const employee = {
    notice : "You need to submit all the documents on time",
    calcTax(){
        console.log("Tax rate is 10%");
    }
};
//New Employee information stored using object
const karan  = {
    age : 21,
    salary : 50000
};

console.dir(karan); // Object has it prototype and iniside prototype all default functions and properties are present

//Want to use calcTax() method in my karan object, then I make karan object prototype by employee object
karan.__proto__ = employee;

console.dir(karan); // Now the Prototype contain all the methods of employee object as well


//What are classes in Javascript?
//classes are blueprint / template of an object through which objects will be created.

//How to create a class in JS ?

class fortuner{
    start(){
        console.log("Start the car");
    }
    stop(){
        console.log("Stop the Car");
    }
}

//How to create an object of a class?

let car1 = new fortuner(); //This object contains all the methods and properties of the class that was used to create the object in its prototype
console.log(car1.start());

//constructor() can be created inside the class whenever object is created.
//when new keyword not able to find the constructor() method, it automatially create it and run 1stly
//we can create our own constructor

class mahindra{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    start(){
        console.log("Start the car");
    }
    stop(){
        console.log("Stop the Car");
    }
    lifeHistory(){
        console.log(`The age of ${this.name} is ${this.age}.`);
    }
}

//Object car2 is of type of class named Mahindra

let car2 = new mahindra();
car2.lifeHistory();

//Inheritance in JS
//Inheritance is the process of inheriting the properties and methods of parent class to child class

class Parent{
    hello(){
        console.log("Hello World from parent");
    }
}

class child extends Parent{
    hello(){
        console.log("Hello World from child");
    }
}

let object = new child();
object.hello();

//super() method in JS used to call parent class constructor
class Parent1{
    constructor(name){
        this.name = name;
    }
    hello(){
        console.log("Hello World from parent");
    }
    eat(){
        console.log("Used to invoke me")
    }
}

class child1 extends Parent1{
    constructor(name){
        super(name);//by passing parameter in super() we can set parent constructor values that is defined through child class object
    }
    hello(){
        super.eat();//super keyword also used to call super class / parent class methods 
        console.log("Hello World from child");
    }
}
let object1 = new child1("Karan");

/* Q. You are creating a website for your college. Create a class User with 2 properties name and email. 
It also has a method called viewData() that allows user to view website data.
*/

class User{
    constructor(user,name,email){
        this.user = user;
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log(`User-${this.user}\nName : ${this.name} \nEmail : ${this.email}`);
    }
}

let user1 = new User(1,"Karan","karan5454@gmail.com");
user1.viewData();

/*
Q. Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data.
*/

class Admin extends User{
    constructor(user, name, email){
        super(user, name, email);
    }
    editData(){
        let data = "Some new Value"
    }
}

let admin = new Admin(1, "Nikku", "nuku23@gmail.com");
console.log(admin);
