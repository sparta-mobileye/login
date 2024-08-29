$(function() {

    $('.btn-link[aria-expanded="true"]').closest('.accordion-item').addClass('active');
  $('.collapse').on('show.bs.collapse', function () {
	  $(this).closest('.accordion-item').addClass('active');
	});

  $('.collapse').on('hidden.bs.collapse', function () {
	  $(this).closest('.accordion-item').removeClass('active');
	});

    

});

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
