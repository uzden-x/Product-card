// Температура в Москве

function showCityTemperature(x='Москве', y='25') {
  console.log(`Сейчас в ${x} ${y} градусов по Цельсию`);
};

showCityTemperature();


// Проверка скорости

const LIGHT_SPEED = 1079252849;

function checkSpeed(currentSpeed) {
  if (currentSpeed>LIGHT_SPEED) {
    console.log('Сверхсветовая скорость');
  }
  else if (currentSpeed === LIGHT_SPEED) {
    console.log('Скорость света');
  }
  else {
    console.log('Субсветовая скорость');
  }
}

checkSpeed();


// Покупка товара

const product = 'MacBook';
const price = 120000;

function buyProduct(walletMoney = 100000) {
  if (walletMoney >=120000) {
    console.log('Макбук приобретен. Спасибо за покупку!');
  }
  else {
    const difference = price - walletMoney;
    console.log(`Вам не хватает ${difference}, пополните баланс.`);
  }
};

buyProduct();

// Сдача экзамена 

const examScore = 70;
const name = 'Мухаммад';


function checkExam(result) {
  if (result>=examScore) {
    console.log(`Поздравляю, ${name}, вы сдали экзамен!`);
  }
  else {
    console.log(`Сожалеем, ${name}, вы не сдали экзамен, ждем вас на пересдачу!`);
  }
}

checkExam(65);
checkExam(75);

// Использую стрелочную функцию для приветствия

const saySalam = (name) => {
  console.log(`Ас саляму алейкум, ${name}`);
}

saySalam('Ибрагим');