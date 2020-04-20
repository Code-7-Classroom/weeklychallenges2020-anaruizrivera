//1
function Person(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
}
//2
Person.prototype.exercise = function() {
    return "Running is fun! - said no one ever";
}
//3
Person.prototype.fetchJob = function() {
    return this.name + ' is a ' + this.job;
}
//4
function Programmer(name, job, age, languages) {
    Person.call(this, name, job, age);
    this.language = [languages];
    this.busy = true;
}
//5
Programmer.prototype.completeTask = function() {
    this.busy = false;
}
Programmer.prototype.acceptNewTask = function() {
    this.busy = true;
}
//6
Programmer.prototype.offerNewTask = function() {
    if (this.busy) {
        console.log(this.name +' cant accept any new tasks right now.');
    } else {
        console.log(' would love to take on a new responsibility.')

    }
}
//7
Programmer.prototype.listLanguage = function() {
  console.log(this.language);
}

Programmer.prototype.learnLanguage= function(program){
    return this.language.push(program);
}
//8
const me = new Person("Ana", "RoadToHire Student", 10)
console.log(me.fetchJob());
const fatima1 = new Programmer("Fatima", "RoadtoHire Student", 17, "HTML");
console.log(fatima1);
fatima1.listLanguage();
fatima1.learnLanguage("ruby");
fatima1.listLanguage();
fatima1.offerNewTask();
fatima1.fetchJob();




// class Person{
//     constructor(name, job, age){
//         this.name = name;
//         this.job = job;
//         this.age = age;
//     }

// }

