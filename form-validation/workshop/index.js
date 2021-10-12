console.log('hello world');

const form = document.querySelector('form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const submitBtn = document.querySelector('button');
const inputs = form.querySelectorAll('input');

inputs.forEach((input) => {
  input.setAttribute('aria-invalid', false);
  input.addEventListener('invalid', () => {
    input.setAttribute('aria-invalid', true);
    console.log(input.validationMessage);
  });
});

function validation(e) {
  if (!email.checkValidity() || !password.checkValidity()) {
    e.preventDefault();
  }
}

submitBtn.addEventListener('submit', validation);
