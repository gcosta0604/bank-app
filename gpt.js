function showForm(formId) {
	let loginForm = document.getElementById('loginForm');
	let registerForm = document.getElementById('registerForm');

	if (formId === 'loginForm') {
		loginForm.style.display = "flex";
		registerForm.style.display = "none";
	}	
	else if (formId === 'registerForm') {
			loginForm.style.display = "none";
			registerForm.style.display = "flex";
	}
	else {
		loginContainer.style.display = 'flex';
		registerContainer.style.display = 'none';
	}
}
// Register form submission
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get register form values
    var username = document.getElementById('registerUsername').value;
    var password = document.getElementById('registerPassword').value;

    // Check if username already exists in local storage
    if (localStorage.getItem(username)) {
        alert('Username already exists. Please choose a different username.');
        return;
    }

    // Save username and password to local storage
    localStorage.setItem(username, password);

    alert('Registration successful!');
});

// Login form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Get login form values
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;

    // Check if username exists in local storage
    if (!localStorage.getItem(username)) {
        alert('Username not found. Please register.');
        return;
    }

    // Compare entered password with stored password
    if (localStorage.getItem(username) === password) {
        alert('Login successful!');
    } else {
        alert('Incorrect password. Please try again.');
    }
});
