// Import the Firebase App module
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDEYx2DwTC7zJjn6WgTlqA5njjtLsG4sp8",
    authDomain: "verso-a4937.firebaseapp.com",
    projectId: "verso-a4937",
    storageBucket: "verso-a4937.appspot.com",
    messagingSenderId: "840088598406",
    appId: "1:840088598406:web:dcf41dd0c5d0f777711e07",
    measurementId: "G-SZEN5L1BRR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Button
const submit = document.getElementById('submit');
submit.addEventListener("click", function(event){
    event.preventDefault();

    // Inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        alert("Creating Account...")
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        // ..
    });
});



