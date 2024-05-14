// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
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
  firebase.initializeApp(firebaseConfig);
  
  // Initialize FirebaseUI
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  
  // Function to handle form submission
  function handleFormSubmission(event) {
      event.preventDefault(); // Prevents the default form submission behavior
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      
      // Register user with email and password
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function(){
          var user = firebase.auth().currentUser;
          alert('User Created');
          var database_ref = firebase.database().ref();
          var user_data = {
              email: email,
              password: password,
              lastLogin: Date.now()
          };
          database_ref.child('users/' + user.uid).set(user_data);
      })
      .catch(function(error){
          var error_message = error.message;
          alert(error_message);
      });
  }
  
  // Add event listener to form submit event
  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', handleFormSubmission);
  
  // Set up FirebaseUI sign-in methods
  ui.start('#firebaseui-auth-container', {
      signInOptions: [
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
          signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
        }
      ],
  });