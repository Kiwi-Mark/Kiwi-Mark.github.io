document.addEventListener("DOMContentLoaded", function () {
  const serviceSelect = document.getElementById("service-select");
  const bookingForm = document.getElementById("booking-form");
  const form = document.getElementById("form");

  // Show booking form when a service is selected
  serviceSelect.addEventListener("change", function () {
    if (this.value) {
      bookingForm.classList.remove("hidden");
    } else {
      bookingForm.classList.add("hidden");
    }
  });

  // Handle form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const service = serviceSelect.value;

    alert(
      `Booking confirmed for ${service}. We will contact you shortly at ${email} or ${phone}.`
    );
  });
});
