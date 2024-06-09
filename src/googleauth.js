
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
  
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
