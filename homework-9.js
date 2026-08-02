import { commentsData } from "./comments.js";

// Задание 2 - массив чисел и фильрация

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersFiltered = numbers.filter(number => number >= 5);
console.log('Задание №2 - создание массива чисел и использование фильтра', numbersFiltered );

// Задание 3 - массив видеоигр, проверка наличия metro 2033

const videoGames = [
  'Stalker',
  'Fallout',
  'Metro2033',
  'Half-Life',
  'Atomic Heart'
];

const videoGamesFinding = videoGames.filter(videoGame => videoGame === 'Metro2033');

console.log('Задание №3 - массив видеоигр', videoGamesFinding);

// Задание 4 - функция переворачивания

function reverseArray(array) {
  return array.reverse();
};

console.log('Задание №4 - переворачивание массивов', reverseArray(numbers));
console.log(reverseArray(videoGames));


// Задание 6 - внедрение константы из файла comments.js

console.log('Задание №6 - импорт константы из другого модуля', commentsData);

// Задание 7 - вывод в консоль элементы, содержащие .com

const newCommentsArray = commentsData.filter(comment => comment.email.includes('.com'));

console.log('Задание №7 - Вывод в консоль комментариев, почта которых содержит ".com"', newCommentsArray);

// Задание 8 - перебрать массив

const newCommentsPostId = commentsData.filter(comment => comment.id <= 5 ? comment.postId=2 : comment.postId=1);

console.log('Задание №8 - Перебор массива по ID', newCommentsPostId);

// Задание 9 - перебрать массив, чтобы комменты состояли только из айди и имени

const commentsWithOnlyIdAndName = commentsData.map( comment => ({
  id: comment.id,
  name: comment.name
}));

console.log('Задание №9 - Перебор массива по айди и имени', commentsWithOnlyIdAndName);

// Задание 10 - добавляем свойство isInvalid

const validatedComments = commentsData.map(comment => ({
  ...comment,
  isInvalid: comment.body.length > 180
}));

console.log('Задание №9 - Добавляем свойство isInvalid', validatedComments);

// Задание 11 - использовать метод массива reduce (было сложно, без ИИ не смог справиться)

const mailArrayReduce = commentsData.reduce(function(result, comment) {
  result.push(comment.email);
  return result
}, []);

console.log('Задание №11 - использование метода массива reduce', mailArrayReduce)

const mailArrayMap = commentsData.map(comment => comment.email);

console.log(mailArrayMap);

// Задание 12 Привести массив из задания 11 к строке

console.log('Задание №12 - приведение массива из задания №11 к string', mailArrayReduce.toString());
console.log(mailArrayReduce.join());