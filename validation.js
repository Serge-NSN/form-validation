function emailValidation() {
  const form = document.getElementById('form');
  const button = document.getElementsByClassName("submit_btn")[0]
  let emailConfirmationRow = document.querySelector("#email_confirm").closest("tr");
  let emailConfirm = document.querySelector("#email_confirm")

  
  
  button.addEventListener('click', e => {
    e.preventDefault();
    if (form.email.value !== form.email_confirm.value) {
      const element = document.createElement('p')
      const message = document.createTextNode("Email does not match")
      emailConfirmationRow.insertAdjacentElement("afterend", element);
      element.appendChild(message);
      element.classList.add("alert");
      element.style.color = "#d14539";
      emailConfirm.style.setProperty("background-color", "rgba(230,169,171,.5)", "important");
      setTimeout(() => {
        element.remove()
      }, 3000)
    } else {
      form.submit();
    }
  });
};

window.onload = emailValidation;