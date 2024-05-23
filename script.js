function checkPassword() {
  var password = document.getElementById("password").value;
  var resultElement = document.getElementById("result");

  // Check if password is at least 8 characters long
  if (password.length < 8) {
    resultElement.textContent = "Password must be at least 8 characters long";
    return;
  }

  // Check if password contains at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    resultElement.textContent = "Password must contain at least one uppercase letter";
    return;
  }

  // Check if password contains at least one lowercase letter
  if (!/[a-z]/.test(password)) {
    resultElement.textContent = "Password must contain at least one lowercase letter";
    return;
  }

  // Check if password contains at least one digit
  if (!/\d/.test(password)) {
    resultElement.textContent = "Password must contain at least one digit";
    return;
  }

  // Check if password contains at least one special character
  if (!/[^a-zA-Z0-9]/.test(password)) {
    resultElement.textContent = "Password must contain at least one special character";
    return;
  }

  // Password is strong if it passes all checks
  resultElement.textContent = "Password is strong";
}
