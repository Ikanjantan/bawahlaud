const navbarNav = document.querySelector(".navbar-nav");
// ketika menu di klik
document.querySelector("#hammenu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// klik diluar sidebar untuk menutup nav
const menuham = document.querySelector("#hammenu");

document.addEventListener("click", function (e) {
  if (!menuham.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
// form Javascript
feather.replace();

      // JavaScript to handle form submission
      document.getElementById('feedback-form').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the form from submitting normally

        // Get values from the form fields
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Display the feedback data (can be replaced with further logic like AJAX or API calls)
        alert(`Terima kasih, ${name}!\n\nPesan Anda telah diterima.\n\nSubjek: ${subject}\nPesan: ${message}`);

        // Optionally, reset the form
        document.getElementById('feedback-form').reset();
      });
