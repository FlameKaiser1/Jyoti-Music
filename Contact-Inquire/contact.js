function showValidationState(input, isValid) {
  input.classList.remove('is-valid', 'is-invalid');
  if (isValid) {
    input.classList.add('is-valid');
  } else {
    input.classList.add('is-invalid');
  }
}

function validateField(input) {
  const value = input.value.trim();
  const name = input.name;

  if (!value && input.tagName !== 'SELECT') {
    showValidationState(input, false);
    return false;
  }

  if (input.tagName === 'SELECT' && !value) {
    showValidationState(input, false);
    return false;
  }

  if (name === 'phone') {
    const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (!regex.test(value)) {
      showValidationState(input, false);
      return false;
    }
  }

  if (name === 'email') {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(value)) {
      showValidationState(input, false);
      return false;
    }
  }

  showValidationState(input, true);
  return true;
}

function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const fields = form.querySelectorAll('input, select, textarea');
  let isValid = true;

  fields.forEach((field) => {
    const valid = validateField(field);
    if (!valid) isValid = false;
  });

  if (isValid) {
    const successMessage = document.createElement('div');
    successMessage.className = 'alert alert-success mt-3';
    successMessage.textContent = 'Thank you! Your enquiry has been submitted successfully.';

    const existingAlert = form.querySelector('.alert');
    if (existingAlert) existingAlert.remove();
    form.appendChild(successMessage);
    form.reset();
    fields.forEach((field) => field.classList.remove('is-valid', 'is-invalid'));
  } else {
    const errorMessage = document.createElement('div');
    errorMessage.className = 'alert alert-danger mt-3';
    errorMessage.textContent = 'Please fill in all required details correctly.';

    const existingAlert = form.querySelector('.alert');
    if (existingAlert) existingAlert.remove();
    form.appendChild(errorMessage);
  }
}

function updateActiveNavItem() {
  const currentPage = (window.location.pathname.split('/').pop() || 'contact.html').toLowerCase();

  document.querySelectorAll('.nav-link[data-page]').forEach((link) => {
    const page = (link.dataset.page || '').toLowerCase();
    const isActive = page === currentPage.replace(/\.html$/, '') || (page === 'home' && (currentPage === '' || currentPage === 'index.html' || currentPage === 'contact.html'));

    link.classList.toggle('active', isActive);
    if (isActive) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

document.querySelectorAll('.needs-validation').forEach((form) => {
  form.addEventListener('submit', handleFormSubmit);
});

updateActiveNavItem();
