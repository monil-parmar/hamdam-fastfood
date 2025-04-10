
document.addEventListener("DOMContentLoaded", () => {
  console.log("Hamdam Fast Food site loaded");

  const form = document.getElementById("booking-form");
  if (form) {
    form.addEventListener("submit", function () {
      alert("Thanks for booking! We'll contact you shortly.");
    });
  }
});


function toggleMode() {
  document.body.classList.toggle('light-mode');
}
