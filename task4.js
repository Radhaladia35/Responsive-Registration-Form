document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Clear previous error messages
    const errors = document.querySelectorAll('.error-message');
    errors.forEach(error => error.textContent = '');
  
    // Get form values
    const name = document.getElementById('name').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const nation = document.getElementById('nation').value;
    const terms = document.getElementById('terms').checked;
  
    let isValid = true;
  
    // Name validation (letters only)
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(name)) {
      document.getElementById('nameError').textContent = 'Name must contain only letters.';
      isValid = false;
    }
  
    // Mobile validation (10 digits)
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(mobile)) {
      document.getElementById('mobileError').textContent = 'Mobile number must be exactly 10 digits.';
      isValid = false;
    }
  
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email.';
      isValid = false;
    }
  
    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
    if (!passwordRegex.test(password)) {
      document.getElementById('passwordError').textContent = 'Password must include at least 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character.';
      isValid = false;
    }
  
    // Confirm password validation
    if (password !== confirmPassword) {
      document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
      isValid = false;
    }
  
    // Gender validation
    if (!gender) {
      document.getElementById('genderError').textContent = 'Please select your gender.';
      isValid = false;
    }
  
    // Nation validation
    if (nation === '') {
      document.getElementById('nationError').textContent = 'Please select your nation.';
      isValid = false;
    }
  
    // Terms validation
    if (!terms) {
      document.getElementById('termsError').textContent = 'You must agree to the terms and conditions.';
      isValid = false;
    }
    
  
    // If form is valid
    if (isValid) {
      alert('Registration successful!');
      document.getElementById('registrationForm').reset();
      
    }
  });

  