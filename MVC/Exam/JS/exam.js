class Exam {
    constructor(subject, student, grade) {
        if (!(subject instanceof Subject) || !(student instanceof Student)) {
            throw new Error("Invalid input!");
        };
        this.subject = subject;
        this.student = student;
        this.grade = grade;
    };
    getExamInfo() {
        return this.subject.getSubjectName() + " " + this.student.getStudentData();
    };
    hasPassed() {
        if (this.grade > 5) {
            return true;
        } else {
            return false;
        };
    };
}