  let count = 0;
  const element = document.querySelector('.box');
  element.addEventListener('click', () => {
    ++count;
    element.textContent = count;
  });

  const button = document.querySelector('button');
  button.addEventListener('click', () => {
    count = 0;
    element.textContent = `clicks: ${count}`;
  });