let template = document.querySelector('.template');
let button = document.querySelector('.button');
let input = document.querySelector('.input');

let getRandomInRange = (min = 1, max = 9) => {
    return Math.floor(min + Math.random() * (max - min + 1))
    }

let firstNumber = getRandomInRange();
let secondNumber = getRandomInRange();

let score = 0;
let menuscore = document.querySelector('.score')

let numberTest = 0



    template.innerHTML = `${firstNumber} * ${secondNumber} = `;

let x = true;

button.addEventListener('click', () => {

if(x){

    x=false

    numberTest++;
    if(numberTest<=20){

    let answer = +input.value 
    if (answer === firstNumber * secondNumber){
        template.innerHTML = `Верно!`;
        score++;
        menuscore.innerHTML = `Твои баллы: ${score}`
    } else {
        template.innerHTML = `Двоечник!`;
        score--
          menuscore.innerHTML = `Твои баллы: ${score}`
    }

    //setTimeout(() => {location.reload()},2000)

    setTimeout(() => {
        x=true;
        getRandomInRange = (min = 1, max = 9) => {
            return Math.floor(min + Math.random() * (max - min + 1))
            }


            firstNumber = getRandomInRange();
            secondNumber = getRandomInRange();
        template.innerHTML = `${firstNumber} * ${secondNumber} = `;},2000)
        }else{

let z;
if (score<=5){
    z=2
}else if(score>17){
    z=5

}else z=4

 menuscore.innerHTML = `Ваша оценка за контрольную: ${z}`
        }
}else {
    template.innerHTML = `Хватит тыкать на кнопку:)`;

}  


} )

