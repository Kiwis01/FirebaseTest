// Import the Firebase App module
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, getRedirectResult } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCT4vMApDP2xVzRftxtpKUCVSRZ6ozIW04",
    authDomain: "verso-e942e.firebaseapp.com",
    projectId: "verso-e942e",
    storageBucket: "verso-e942e.appspot.com",
    messagingSenderId: "246129414656",
    appId: "1:246129414656:web:f7ba50b3bfd849caf37ee5",
    measurementId: "G-GQHPDPZF9Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Check for redirect result on page load
window.addEventListener('load', async () => {
    try {
        const result = await getRedirectResult(auth);
        if (result) {
            // User signed in via redirect
            const user = result.user;
            alert("Signed in via redirect");
            window.location.href = "menu.html";
        }
    } catch (error) {
        console.error("Error getting redirect result:", error);
    }
});

// Button
const submitButton = document.getElementById('log');
submitButton.addEventListener("click", async function(event) {
    event.preventDefault();

    // Inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        alert("Signed in");
        window.location.href = "menu.html";
    } catch (error) {
        alert(error.message);
    }
});
