class Subject {
    constructor(name) {
        if (!name) {
            throw new Error("Subject is required!");
        }
        this.name = name;
    };
    getSubjectName() {
        return this.name;
    }
}