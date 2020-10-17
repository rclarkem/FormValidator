const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');

function showError(element, message) {
  const formControl = element.parentElement;
  formControl.className = 'form-control error';
  const errorMess = formControl.children[2];
  errorMess.textContent = message;
}

function showSuccess(element) {
  const formControl = element.parentElement;
  formControl.className = 'form-control success';
}

function validEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(email.value.trim()))) {
    return showSuccess(email);
  } else {
    return showError(email, 'Email not Valid');
  }
}

function checkRequired(inputs) {
  return inputs.forEach((input) => {
    if (input.value.trim() === '') {
      return showError(input, `${getFieldName(input)} is required`);
    } else {
      return showSuccess(input);
    }
  });
}

function getFieldName(input) {
  return input.id.slice(0, 1).toUpperCase() + input.id.slice(1).toLowerCase();
}

function checkLength(input, startLength, endlength) {
  console.log(input.value.length);
  if (input.value.length < startLength) {
    return showError(input, `${getFieldName(input)} must be at least ${startLength} characters`);
  } else if (input.value.length > endlength) {
    return showError(input, `${getFieldName(input)} must not exceed ${endlength} characters`);
  } else {
    return showSuccess(input);
  }
}

function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords Don't Match!");
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkRequired([username, email, password, confirmPassword]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  validEmail(email);
  checkPasswordsMatch(password, confirmPassword);
});
