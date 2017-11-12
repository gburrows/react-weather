var names = ['Graham', 'Ian', 'Brian', 'Karen'];
//
//names.forEach(function (name) {
//	console.log('forEach', name);
//});
//
//names.forEach((name) => console.log('arrowFunc', name));

//var returnMe = (name) => name + '!!!';
//console.log(returnMe('Graham'));

var person = {
	name: 'Graham',
	greet: function () {
		names.forEach(function(name) {
			console.log(this.name + ' says hi to ' + name)
		});
	}
}

person.greet();

//This will be undefined because of the this referring to the object inside the greet: function

//However, use of an arrow function means that it refers to an object higher, being the object 'person'

var person = {
	name: 'Graham',
	greet: function () {
		names.forEach((name) => console.log(this.name + ' says hi to ' + name));
	}
}

person.greet();


function add (a, b) {
	return a + b;
}

var addStatement = (a, b) => {
	return a + b;
}

var addExpression = (a, b) => a + b;

console.log(add(1, 3));
console.log(add(9, 5));

console.log(addStatement(6, 3) + ' statement');

console.log(addExpression(5, 5) + ' expression');