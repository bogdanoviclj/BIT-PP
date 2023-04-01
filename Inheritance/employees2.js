class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    };
}

class Employee extends Person {
    constructor(name, surname, job, salary) {
        super(name, surname);
        this.job = job;
        this.salary = salary;
    };
    getData() {
        return this.name + " " + this.surname + " " + this.salary;
    };
    getSalary() {
        console.log(this.salary);
    };
    increaseSalary() {
        this.salary *= 1.1;
        return this.salary;
    };
}

class Developer extends Employee {
    constructor(name, surname, job, salary, specialization) {
        super(name, surname, job, salary);
        this.specialization = specialization;
    };
    getSpecialization() {
        console.log(this.specialization);
    };
}

class Menager extends Employee {
    constructor(name, surname, job, salary, department) {
        super(name, surname, job, salary);
        this.department = department;
    };
    getDepartment() {
        console.log(this.department);
    };
    changeDepartment(department) {
        this.department = department;
        console.log(this.department);
    };
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