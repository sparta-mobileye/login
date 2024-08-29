// Example email from the logged-in user
const userEmail = "employee@example.com";
document.getElementById('user-email').innerText = userEmail;

document.querySelectorAll('.shift-cell').forEach(cell => {
    cell.addEventListener('click', function() {
        if (!this.classList.contains('selected')) {
            this.classList.add('selected');
            // Store selection in the backend or session storage
            // Example: Store selection to Firebase (for simplicity, let's just log it)
            console.log(`User ${userEmail} selected ${this.dataset.day} ${this.dataset.shift}`);
        } else {
            this.classList.remove('selected');
            // Remove selection in the backend or session storage
            console.log(`User ${userEmail} deselected ${this.dataset.day} ${this.dataset.shift}`);
        }
    });
});

// Logout function
document.getElementById('logout-button').addEventListener('click', function() {
    // Implement logout logic here (e.g., Firebase signOut)
    window.location.href = "index.html"; // Redirect to login page
});

// Sign-Up Functionality
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log(`Signing up with Email: ${email}, Password: ${password}`);
    // Implement sign-up logic (e.g., Firebase Authentication)
    window.location.href = "index.html"; // Redirect to login page after successful sign-up
});
