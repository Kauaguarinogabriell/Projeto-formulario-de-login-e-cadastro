window.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    const value = event.target.value;
    const elementTarget = event.target;
    if (value == false) {
      elementTarget.style.outline = '1px solid red';
    } else {
      elementTarget.style.outline = 'none';
    }
  }
});
