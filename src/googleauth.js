
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
  
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
  const provider = new GoogleAuthProvider();

  // Google Sign-In Function
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log("User Info:", user);
        window.location.href = "menu.html";
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.error("Error: ", errorCode, errorMessage, email, credential);
      });
  };

  // Add event listener to your sign-in button
  document.getElementById("googleSignInBtn").addEventListener("click", signInWithGoogle);
