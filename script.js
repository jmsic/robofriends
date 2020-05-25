function Person (first, last, age, eye){
	this.firstName = first,
	this.lastName = last,
	this.age = age,
	this.eyeColor = eye,
	this.name = function () {
		return this.firstName + " " + this.lastName
	};
}


var myself = new Person ("Ian", "Chen", 38, "Black");

console.log("my name is " + myself.name());