//complete this code
class Person {
	constructor(_name, _age) {
		this.name = _name;
		this.age = _age;
	}

	get name () {
		return this.name;
	}

	set age(newAge) {
		this.age = newAge;
	}
}

class Student extends Person {
	study() {
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	teach() {
		console.log(`${this.name} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
