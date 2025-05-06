const form = document.querySelector("form");
console.log(form);
const fullname = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const massage = document.getElementById("massage");
const inputValues = document.querySelectorAll(".item");

function checkInput() {
  for (const item of inputValues) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    if (inputValues[1].value != "") {
      checkEmail();
    }

    inputValues[1].addEventListener("keyup", () => {
      checkEmail();
    });

    item.addEventListener("keyup", () => {
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

function checkEmail() {
  const reGex = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
  const errorTxtEmail = document.querySelector(".error-txt.email");

  if (!email.value.match(reGex)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");
  } else {
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }

  if (email.value != "") {
    errorTxtEmail.innerHTML = "Enter a valid email address";
  } else {
    errorTxtEmail.innerHTML = "Email Address Can't Be Empty";
  }
}

form.addEventListener("submit", (a) => {
  checkInput();

  let hasError = false;
  inputValues.forEach((input) => {
    if (input.classList.contains("error")) {
      hasError = true;
    }
  });

  if (hasError) {
    a.preventDefault();
  } else {
    alert("Form sunmitted successfully");
  }

  form.reset();
  return false;
});
