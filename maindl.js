let template = document.querySelector('.template');
let button = document.querySelector('.button');
let input = document.querySelector('.input');

const getRandomInRange = (min = 1, max = 9) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let firstNumber = getRandomInRange();
let secondNumber = getRandomInRange();

let score = 0;
let menuscore = document.querySelector('.score');

template.innerHTML = `${firstNumber * secondNumber} / ${secondNumber} = `;

let isClickable = true;

button.addEventListener('click', () => {

  if (isClickable) {

    isClickable = false;

    let answer = +input.value;
    if (answer === firstNumber) {  
      template.innerHTML = `Верно!`;
      score++;
      menuscore.innerHTML = `Твои баллы: ${score}`;
    } else {
      template.innerHTML = `Неверно! Правильный ответ: ${firstNumber}`; // Показ правильного ответа
      score--;
      menuscore.innerHTML = `Твои баллы: ${score}`;
    }

    input.value = ''; // Очистка поля ввода

    setTimeout(() => {
      isClickable = true;

      firstNumber = getRandomInRange();
      secondNumber = getRandomInRange();

      template.innerHTML = `${firstNumber * secondNumber} / ${secondNumber} = `;
    }, 2000);

  } else {
    template.innerHTML = `Не тыкай на кнопку!`;

  }
});
