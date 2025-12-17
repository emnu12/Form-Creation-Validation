document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // prevent form submission

        // Get trimmed values
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Validation flags
        let errors = [];

        // Username validation
        if (username.length < 3) {
            errors.push("Username must be at least 3 characters long.");
        }

        // Email validation (simple regex)
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test(email)) {
            errors.push("Please enter a valid email address.");
        }

        // Password validation
        if (password.length < 6) {
            errors.push("Password must be at least 6 characters long.");
        }

        // Show feedback
        if (errors.length > 0) {
            feedbackDiv.style.display = "block";
            feedbackDiv.style.color = "#d8000c";
            feedbackDiv.style.backgroundColor = "#ffbaba";
            feedbackDiv.innerHTML = errors.join("<br>");
        } else {
            feedbackDiv.style.display = "block";
            feedbackDiv.style.color = "#4F8A10";
            feedbackDiv.style.backgroundColor = "#DFF2BF";
            feedbackDiv.innerHTML = "Registration successful!";
            
            // Optionally, reset the form
            form.reset();
        }
    });
});
