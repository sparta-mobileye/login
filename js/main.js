import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvhdmhh12h2qbl99385j3iRKR9EEw01HU",
    authDomain: "sparta-m.firebaseapp.com",
    projectId: "sparta-m",
    storageBucket: "sparta-m.appspot.com",
    messagingSenderId: "137777159078",
    appId: "1:137777159078:web:0d7639edd4feb7441d0d67",
    measurementId: "G-5519CNXMV7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle logout
document.getElementById('logout-button').addEventListener('click', function() {
    signOut(auth).then(() => {
        window.location.href = "index.html"; // Redirect to login page
    }).catch((error) => {
        console.error('Sign out error:', error);
    });
});

// Example function for handling shift selection
document.querySelectorAll('.shift-cell').forEach(cell => {
    cell.addEventListener('click', function() {
        if (!this.classList.contains('selected')) {
            this.classList.add('selected');
            console.log(`Shift selected for ${this.dataset.day} ${this.dataset.shift}`);
        } else {
            this.classList.remove('selected');
            console.log(`Shift deselected for ${this.dataset.day} ${this.dataset.shift}`);
        }
    });
});
