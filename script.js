//complete this code
class Person {
	constructor(_name, _age) {
		this._name = _name;
		this._age = _age;
	}

	get name () {
		return this._name;
	}

	set age(newAge) {
		this._age = newAge;
	}
}

class Student extends Person {
	study() {
		console.log(`${this._name} is studying`);
	}
}

class Teacher extends Person {
	teach() {
		console.log(`${this._name} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
