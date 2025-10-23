document.addEventListener("DOMContentLoaded", function () {
  const email = document.querySelector("#email");
  const confirmEmail = document.querySelector("#confirmEmail");

  // Create or select error message element
  let errorMsg = document.createElement("p");
  errorMsg.textContent = "Emails do not match";
  errorMsg.style.color = "#d14539";
  errorMsg.style.display = "none";
  confirmEmail.insertAdjacentElement("afterend", errorMsg);

  function validateEmails() {
    if (email.value && confirmEmail.value && email.value !== confirmEmail.value) {
      errorMsg.style.display = "block";
      confirmEmail.style.backgroundColor = "rgba(230,169,171,.5)";
    } else {
      errorMsg.style.display = "none";
      confirmEmail.style.backgroundColor = "";
    }
  }

  email.addEventListener("input", validateEmails);
  confirmEmail.addEventListener("input", validateEmails);
});
