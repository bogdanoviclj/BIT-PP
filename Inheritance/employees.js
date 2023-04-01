function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

function Employee(name, surname, job, salary) {
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getData = function () {
    return this.name + " " + this.surname + " " + this.salary;
}

Employee.prototype.getSalary = function () {
    console.log(this.salary);
}

Employee.prototype.increaseSalary = function () {
    this.salary *= 1.1;
    return this.salary;
}


function Developer(name, surname, job, salary, specialization) {
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;
}

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.getSpecialization = function () {
    console.log(this.specialization);
}

function Menager(name, surname, job, salary, department) {
    Employee.call(this, name, surname, job, salary);
    this.department = department;
}

Menager.prototype = Object.create(Employee.prototype);
Menager.prototype.constructor = Menager;

Menager.prototype.getDepartment = function () {
    console.log(this.department);
}

Menager.prototype.changeDepartment = function (department) {
    this.department = department;
    console.log(this.department);
}

var pera = new Person("Pera", "Peric");
var mika = new Employee("Mika", "Mikic", "programmer", 1000);
var laza = new Developer("Laza", "Lazic", "programmer", 1500, "frontend");
var zika = new Menager("Zika", "Zikic", "menager", 2000, "HR")
laza.getSpecialization();
zika.getDepartment();
zika.changeDepartment("Frontend menager")
console.log(laza.getData());
zika.getSalary();
zika.increaseSalary();
console.log(pera);
console.log(mika);
console.log(laza);
console.log(zika);