function Student(name, age, grades) {
  this.name = name;
  this.age = age;
  this.grades = grades;
}

Student.prototype.addGrade = function (grade) {
  this.grades.push(grade);
};

Student.prototype.getAverage = function () {
  if (this.grades.length === 0) {
    return 0;
  }
  let sum = this.grades.reduce((acc, grade) => acc + grade, 0);
  return sum / this.grades.length;
};

Student.prototype.introduce = function () {
  console.log(`Salom, mening ismim ${this.name}, yoshim ${this.age} da`);
};

let student1 = new Student("Azim", 19, [5, 4, 3]);
student1.addGrade(5);
console.log("O'rtacha baho:", student1.getAverage());
student1.introduce();
