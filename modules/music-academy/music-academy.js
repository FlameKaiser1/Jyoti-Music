document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("academy-enquiry-form");
  const nameInput = document.getElementById("academy-name");
  const phoneInput = document.getElementById("academy-phone");
  const phoneError = document.getElementById("phone-error");
  const successBanner = document.getElementById("demo-success-banner");

  // Prevent typing non-digits in the mobile input on the fly
  if (phoneInput) {
    phoneInput.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^0-9]/g, "");
      if (phoneError) {
        phoneError.style.display = "none";
      }
    });
  }

  // Prevent typing numbers or special characters in the name input on the fly
  if (nameInput) {
    nameInput.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^A-Za-z\s.]/g, "");
    });
  }

  // Form submission handler with strict checks
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameValue = nameInput ? nameInput.value.trim() : "";
      const phoneValue = phoneInput ? phoneInput.value.trim() : "";

      // Validate Name (Must be at least 2 characters, only letters, spaces, dots)
      const nameRegex = /^[A-Za-z\s.]{2,50}$/;
      if (!nameRegex.test(nameValue)) {
        alert("Please enter a valid name using letters and spaces only.");
        if (nameInput) nameInput.focus();
        return;
      }

      // Validate Indian Mobile Number (10 digits starting with 6, 7, 8, or 9)
      const phoneRegex = /^[6-9]\d{9}$/;
      if (!phoneRegex.test(phoneValue)) {
        if (phoneError) {
          phoneError.textContent =
            "Please enter a valid 10-digit mobile number starting with 6-9.";
          phoneError.style.display = "block";
        }
        if (phoneInput) phoneInput.focus();
        return;
      }

      // Clear error message if valid
      if (phoneError) {
        phoneError.style.display = "none";
      }

      // Display green success banner
      if (successBanner) {
        successBanner.style.display = "block";
        successBanner.scrollIntoView({ behavior: "smooth", block: "center" });
      }

      // Reset form fields
      form.reset();
    });
  }

  // Smooth scroll handler for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");

      if (targetId === "#" || !targetId.startsWith("#")) return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});

// Mobile navigation toggle
const mobileToggle = document.getElementById("academy-mobile-toggle");
const navMenu = document.getElementById("academy-nav");

if (mobileToggle && navMenu) {
  mobileToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    const icon = mobileToggle.querySelector(".material-symbols-outlined");
    if (icon) {
      icon.textContent = navMenu.classList.contains("active")
        ? "close"
        : "menu";
    }
  });
}
