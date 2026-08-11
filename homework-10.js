import { products } from './products.js';

const IMAGE_FOLDER = 'images';
const IMAGE_EXTENSION = 'png';
const CURRENCY_SIGN = "\u20BD";  // оказывается, в javascript символ рубля пишется по другому

// Использование функции reduce
const descriptionByNameArray = products.reduce((acc, item) => {
  acc.push({
    [item.name]: item.description
  })

  return acc;
}, []);

console.log('Описания по названию:', descriptionByNameArray);

// Функция запрашивает количество карточек
export function getCardsCount() {
    const answer = prompt('Сколько карточек отобразить? От 1 до 5');

    const count = Number(answer);

    const isValid =
      answer !== null &&
      Number.isInteger(count) &&
      count >= 1 &&
      count <= 5;

    if (isValid) {
      return count;
    }
    else{
      alert('Нужно ввести целое число от 1 до 5.');
      return getCardsCount();
    };
  }


// Функция рендерит карточки из массива
function renderCards(cards) {
  const productsList = document.querySelector('#products-list');
  const productTemplate = document.querySelector('#product-template');

  if (!Array.isArray(cards) || cards.length === 0) {
    return;
  }

  if (!productsList || !productTemplate) {
    console.error('Не найдены элементы для рендера карточек');
    return;
  }

  productsList.innerHTML = '';

  const templateCard = productTemplate.content.querySelector('.products__item');

  for (const item of cards) {
    const card = templateCard.cloneNode(true);

    const image = card.querySelector('.card__image');
    image.src = `${IMAGE_FOLDER}/${item.image}.${IMAGE_EXTENSION}`;
    image.alt = `Товар ${item.name}`;

    card.querySelector('.card__category').textContent = item.category;

    const name = card.querySelector('.card__name');
    name.textContent = item.name;

    name.classList.add(item.image);

    card.querySelector('.card__description').textContent = item.description;

    const ingredientsList = card.querySelector('.compound__list');

    for (const ingredient of item.ingredients) {
      const li = document.createElement('li');
      li.textContent = ingredient;

      ingredientsList.append(li);
    }

    const price = card.querySelector('.card__price span');
    price.textContent = `${item.price} ${CURRENCY_SIGN}`;

    productsList.append(card);
  }
}

// Запуск при старте страницы
function init() {
  const count = getCardsCount();

  const cardsToShow = products.slice(0, count);

  renderCards(cardsToShow);
}

document.addEventListener('DOMContentLoaded', init);
