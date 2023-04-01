class Student {
    constructor(name, surname) {
        if (!name || !surname) {
            throw new Error("Name and surname are required!");
        }
        this.name = name;
        this.surname = surname;
    };
    getStudentData() {
        return this.name + " " + this.surname;
    };
}