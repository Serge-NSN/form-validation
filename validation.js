document.addEventListener('DOMContentLoaded', function () {
  const email = document.getElementById('email');
  const emailConfirm = document.getElementById('email-confirm');
  const errorDiv = document.getElementById('email-error');

  function validateEmails() {
    if (emailConfirm.value === "") {
      errorDiv.textContent = '';
      emailConfirm.classList.remove('input-error');
      return;
    }
    if (email.value !== emailConfirm.value) {
      errorDiv.innerHTML = '<span class="error-message">Email does not match</span>';
      emailConfirm.classList.add('input-error');
    } else {
      errorDiv.textContent = '';
      emailConfirm.classList.remove('input-error');
    }
  }

  email.addEventListener('input', validateEmails);
  emailConfirm.addEventListener('input', validateEmails);
});
