const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');

function showError(element, message) {
  const formControl = element.parentElement;
  formControl.className = formControl.className + ' error';
  const errorMess = formControl.children[2];
  errorMess.textContent = message;
}

function showSuccess(element) {
  const formControl = element.parentElement;
  formControl.className = formControl.className + ' success';
}

function checkRequired(inputs) {
  inputs.forEach((input) => {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

function getFieldName(input) {
  return input.id.slice(0, 1).toUpperCase() + input.id.slice(1).toLowerCase();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkRequired([username, email, password, confirmPassword]);
});
