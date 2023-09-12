const emailForm = document.getElementById("emailForm");
const userNameInput = document.getElementById("userName");
const userEmailInput = document.getElementById("exampleInputEmail");
const modalUsername = document.querySelector(".modalUsername");
const modalEmail = document.querySelector(".modalEmail");

emailForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const userName = userNameInput.value;
  const userEmail = userEmailInput.value;

  modalUsername.textContent = `Name: ${userName}`;
  modalEmail.textContent = `Email: ${userEmail}`;

  const modal = new bootstrap.Modal(document.querySelector(".modal"));
  modal.show();
});

