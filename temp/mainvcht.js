let template = document.querySelector('.template');
let button = document.querySelector('.button');
let input = document.querySelector('.input');

const getRandomInRange = (min = 1, max = 20) => { 
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let firstNumber = getRandomInRange();
let secondNumber = getRandomInRange(1, firstNumber - 1); //

let score = 0;
let menuscore = document.querySelector('.score');

template.innerHTML = `${firstNumber} - ${secondNumber} = `;

let isClickable = true;

button.addEventListener('click', () => {

  if (isClickable) {

    isClickable = false;

    let answer = +input.value;
    if (answer === (firstNumber - secondNumber)) {  
      template.innerHTML = `Верно!`;
      score++;
      menuscore.innerHTML = `Твои баллы: ${score}`;
    } else {
      template.innerHTML = `Неверно! Правильный ответ: ${firstNumber - secondNumber}`; // Показ правильного ответа
      score--;
      menuscore.innerHTML = `Твои баллы: ${score}`;
    }

    input.value = ''; // Очистка поля ввода

    setTimeout(() => {
      isClickable = true;

      firstNumber = getRandomInRange();
      secondNumber = getRandomInRange(1, firstNumber - 1); 
      template.innerHTML = `${firstNumber} - ${secondNumber} = `;
    }, 2000);

  } else {
    template.innerHTML = `Не тыкай на кнопку!`;

  }
});
