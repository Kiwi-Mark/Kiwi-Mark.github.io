document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signup-form-element");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const phoneNumber = document.getElementById("phone_number").value;

    if (!phoneNumber.match(/^\d{10}$/)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
    alert("Form submitted successfully!");
  });
});
