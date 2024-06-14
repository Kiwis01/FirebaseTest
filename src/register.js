// Import the Firebase App module
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, getRedirectResult } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

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
            window.location.href = "menu.html";
        }
    } catch (error) {
        console.error("Error getting redirect result:", error);
    }
});

// Button
const submit = document.getElementById('reg');
submit.addEventListener("click", async function(event){
    event.preventDefault();

    // Inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;

    if(password == password2){
        try{
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            window.location.href = "menu.html";
        }
        catch(error){
            alert(error.message);
        }
    }
    else {
        alert("Passwords do not match");
    }
});



