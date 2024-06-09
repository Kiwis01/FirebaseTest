const argon2 = require('argon2');

    document.addEventListener("DOMContentLoaded", function() {
        var input = document.querySelector('.pswrd');
        var show = document.querySelector('.show');
        
        show.addEventListener('click', togglePasswordVisibility);
        
        function togglePasswordVisibility() {
            if (input.type === "password") {
                input.type = "text";
                show.style.color = "#1DA1F2";
                show.textContent = "HIDE";
            } else {
                input.type = "password";
                show.textContent = "SHOW";
                show.style.color = "#111";
            }
        }
        
 
        var form = document.querySelector('form');
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            var email = document.querySelector('input[type="text"]').value;
            var password = input.value;
            
            // For demonstration, log the values to console
            console.log("Email:", email);
            console.log("Password:", password);
        });
    });