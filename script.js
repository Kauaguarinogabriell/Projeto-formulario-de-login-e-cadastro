const userInput = document.getElementById('user');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

userInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    const value = userInput.value;
    if (value == false) {
      userInput.style.outline = '1px solid red';
    } else {
      userInput.style.outline = 'none';
    }
  }
});

if (emailInput != undefined) {
  emailInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      const value = emailInput.value;
      if (value == false) {
        emailInput.style.outline = '1px solid red';
      } else {
        emailInput.style.outline = 'none';
      }
    }
  });
}

passwordInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    const value = passwordInput.value;
    if (value == false) {
      passwordInput.style.outline = '1px solid red';
    } else {
      passwordInput.style.outline = 'none';
    }
  }
});
