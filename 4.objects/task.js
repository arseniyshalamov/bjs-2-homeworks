function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    'marks' in this ? this.marks.push(...marks) : console.log('Студент отчислен');

    //второй способ решения 
    //if (this.marks !== undefined) {
    //    this.marks.push(...marks)
    //} else {
    //    console.log('Студент отчислен')
    //}
}

Student.prototype.getAverage = function () {
    return 'marks' in this && this.marks.length ? this.marks.reduce((prev, item) => prev + item, 0) / this.marks.length : 0;

    //второй способ решения 
    //return this.marks && this.marks.length ? this.marks.reduce((prev, item) => prev + item, 0) / this.marks.length : 0;
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}

let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);
// {age: 19, gender: "женский", marks: [4, 5, 4, 5], name: "Василиса", subject: "Algebra"}
let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба')
console.log(student2)
// {name: "Артём", gender: "мужской", age: 25, excluded: "плохая учёба"}