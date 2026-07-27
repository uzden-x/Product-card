// 3. Объект на основе моих данных

const user = {
  name: 'Muhammad',
  surname: 'Suleymanov',
  mail: 'muhammad.mail.ru',
  job: 'frontend developer',
  post: 'middle developer',
  age: 23,
  country: 'Russia',
  weight: 83,
  heigh: 182
};

console.log(user);

// 4. Автомобиль марка, модель, год выпуска, цвет, вид коробки

const userCar = {
  brand: 'VAZ',
  model: 2109,
  year: 1999,
  color: 'white',
  transmission: 'manual',
};

userCar.name = user;

console.log(userCar);
console.log(userCar.name.name);
 
// 5. Проверка наличия свойства максимальной скорости

function addMaxSpeed(someCar) {
  if (someCar.maxSpeed === undefined) {
    someCar.maxSpeed = 160;
    console.log(`Добавлена максимальная скорость ${someCar.maxSpeed} км/ч`);
  }
  else {
    console.log('Максимальная скорость уже есть')
  }
};

addMaxSpeed(userCar);
console.log("Обновление данных о машине:", userCar);

// 6. Функция вывода свойств

function getObjectProperty(object, property) {
  if (object[property] !== undefined) {
    console.log(`Значение свойства "${property}":`, object[property]); // Исправлено: добавлены обратные кавычки
  } else {
    console.log(`Свойство "${property}" не найдено в объекте.`); // Исправлено: добавлены обратные кавычки
  }
};

getObjectProperty(user, 'name');
getObjectProperty(userCar, 'brand');

// 7. Создание массива с продуктами

const array = [
  'Milk',,
  'Bread',
  'Butter',
  'Juice',
  'Meat'
];

// 8. Массивы с книгами

const books = [
  {
  title: 'Война и Мир',
  author: 'Л.Н.Толстой',
  year: 1869,
  color: 'Желтый',
  genre: 'Роман-эпопея'
  },
  {
  title: '1984',
  author: 'Дж. Оруэлл',
  year: 1949,
  color: 'Красный',
  genre: 'Роман-антиутопия'
  },
  {
  title: 'Палата №6',
  author: 'А.П.Чехов',
  year: 1892,
  color: 'Белый',
  genre: 'Повесть'
  }
];

books.push( {
  title: 'Метро 2033',
  author: 'Д.Глуховский',
  year: 2005,
  color: 'Черный',
  genre: 'Постапокалиптический роман'
}); 

console.log(books);

// 9. Еще один массив книг

const kotaroIsaka = [
  {
  title: 'Топор Богомола',
  author: 'Котаро Исака',
  year: 2017,
  color: 'Красный',
  genre: 'Роман'
  },
  {
  title: 'Поезд убийц',
  author: 'Котаро Исака',
  year: 2010,
  color: 'Серый',
  genre: 'Роман'
  },
  {
  title: 'Кузнечик',
  author: 'Котаро Исака',
  year: 2015,
  color: 'Желтый',
  genre: 'Роман'
  }
];

const combineBooks = [...books, ...kotaroIsaka];

console.log(combineBooks);

// 10. Добавление свойства isRare


const addRareProperty = (booksArray) => 
  booksArray.map(
    book => 
      ({
      ...book,
      isRare: book.year > 2000
  }));

const booksWithRare = addRareProperty(combineBooks);

console.log(booksWithRare);