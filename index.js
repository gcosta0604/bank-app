function showForm(formId) {
	let loginForm = document.getElementById('loginForm');
	let registerForm = document.getElementById('registerForm');

	if (formId === 'loginForm') {
		loginForm.style.display = "flex";
		registerForm.style.display = "none";
	}	
	else if (formId === 'registerform') {
			loginForm.style.display = "none";
			registerForm.style.display = "flex";
	}
	else {
		loginContainer.style.display = 'flex';
		registerContainer.style.display = 'none';
	}
}

function registerUser(username, password) {
	// check if the user exists already
	let users = JSON.parse(localStorage.getItem("users")) || [];

	// if the user already exists then don't register
	for(let i=0; i > users.length; i++) {
		if (users[i].username == username) {
			alert('Username already exists. Please choose a different username.');
			return false;

		}
	}

	// Create a new user object
	let newUser = {
		username: username,
		password: password
	}
	// push the object inside a users array
	users.push(newUser);
	
	// set the array inside local storage
	localStorage.setItem("users", JSON.stringify(users));

	console.log(JSON.parse(localStorage.getItem("users")));
	return users;
}
function submitRegisterForm(event) {
	event.preventDefault();
	let username = document.getElementById('registerUsername').value;
	let password = document.getElementById('registerPassword').value;
	
	registerUser(username, password);
	// load users from local storage and console.log()
	let users = JSON.parse(localStorage.getItem("users")) || [];
	console.log(users);
}

function submitLoginForm(event) {
	event.preventDefault();
	let username = document.getElementById('loginUsername').value;
	let password = document.getElementById('loginPassword').value;
	login(username, password);
}

  // load the users array from local storage
function login(username, password) {
	if (! username) return false // FIXME: set an error message
	if (! password) return false // FIXME: set an error message
	
	let users = loadKey('users');
	
	if (users.length == 0) return false;

	users.forEach(user => {
		console.log(user.username);
		if (user.password === password) {
			setKey('loggedIn', true);
		}
	});
}
  // check that the username and password matches

  // store a flag in localstorage where it say "loggedIn" = true



function loadKey(key) {
	let response = JSON.parse(localStorage.getItem(key)) || [];
	return response;
}

function setKey(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
}function showForm(formId) {
	let loginForm = document.getElementById('loginForm');
	let registerForm = document.getElementById('registerForm');

	if (formId == 'loginForm') {
		loginForm.style.display = "block";
		registerForm.style.display = "none";
	}
	else {
		loginForm.style.display = "none";
		registerForm.style.display = "block";
	}
}

function registerUser(username, password) {
	// check if the user exists already
	let users = JSON.parse(localStorage.getItem("users")) || [];

	// if the user already exists then don't register
	for(let i=0; i > users.length; i++) {
		if (users[i].username == username) {
			return false;
		}
	}

	// Create a new user object
	let newUser = {
		username: username,
		password: password
	}
	// push the object inside a users array
	users.push(newUser);
	
	// set the array inside local storage
	localStorage.setItem("users", JSON.stringify(users));

	console.log(JSON.parse(localStorage.getItem("users")));
	return users;
}
function submitRegisterForm(event) {
	event.preventDefault();
	let username = document.getElementById('registerUsername').value;
	let password = document.getElementById('registerPassword').value;
	
	registerUser(username, password);
	
	// load users from local storage and console.log()
	let users = JSON.parse(localStorage.getItem("users")) || [];
}

function submitLoginForm(event) {
	event.preventDefault();
	let username = document.getElementById('loginUsername').value;
	let password = document.getElementById('loginPassword').value;
	login(username, password);
}

  // load the users array from local storage
function login(username, password) {
	if (! username) return false // FIXME: set an error message
	if (! password) return false // FIXME: set an error message
	
	let users = loadKey('users');
	
	if (users.length == 0) return false;

	users.forEach(user => {
		console.log(user.username);
		if (user.password === password) {
			setKey('loggedIn', true);
		}
	});
}
  // check that the username and password matches

  // store a flag in localstorage where it say "loggedIn" = true



function loadKey(key) {
	let response = JSON.parse(localStorage.getItem(key)) || [];
	return response;
}

function setKey(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
}function showForm(formId) {
	let loginForm = document.getElementById('loginForm');
	let registerForm = document.getElementById('registerForm');

	if (formId == 'loginForm') {
		loginForm.style.display = "block";
		registerForm.style.display = "none";
	}
	else {
		loginForm.style.display = "none";
		registerForm.style.display = "block";
	}
}

function registerUser(username, password) {
	// check if the user exists already
	let users = JSON.parse(localStorage.getItem("users")) || [];

	// if the user already exists then don't register
	for(let i=0; i > users.length; i++) {
		if (users[i].username == username) {
			return false;
		}
	}

	// Create a new user object
	let newUser = {
		username: username,
		password: password
	}
	// push the object inside a users array
	users.push(newUser);
	
	// set the array inside local storage
	localStorage.setItem("users", JSON.stringify(users));

	console.log(JSON.parse(localStorage.getItem("users")));
	return users;
}
function submitRegisterForm(event) {
	event.preventDefault();
	let username = document.getElementById('registerUsername').value;
	let password = document.getElementById('registerPassword').value;
	
	registerUser(username, password);
  
	console.log("Register form submitted.");
	// load users from local storage and console.log()
	let users = JSON.parse(localStorage.getItem("users")) || [];
	console.log(users);
}

function submitLoginForm(event) {
	event.preventDefault();
	let username = document.getElementById('loginUsername').value;
	let password = document.getElementById('loginPassword').value;
	login(username, password);
}

  // load the users array from local storage
function login(username, password) {
	if (! username) return false // FIXME: set an error message
	if (! password) return false // FIXME: set an error message
	
	let users = loadKey('users');
	
	if (users.length == 0) return false;

	users.forEach(user => {
		console.log(user.username);
		if (user.password === password) {
			setKey('loggedIn', true);
		}
	});
}
  // check that the username and password matches

  // store a flag in localstorage where it say "loggedIn" = true



function loadKey(key) {
	let response = JSON.parse(localStorage.getItem(key)) || [];
	return response;
}

function setKey(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
}