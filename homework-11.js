// Уровень 1

const formEmail = document.querySelector('#formEmail')
formEmail.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(formEmail);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
});

// Уровень 2


let user;

const modal = document.querySelector('.modal')
const openBtn = document.querySelector('.modal-btn')
const closeBtn = document.querySelector('.close-button')
const regForm = document.getElementById('regForm')
const overlay = document.querySelector('.overlay')

function closeModal() {
  modal.classList.remove('modal-showed');
  regForm.reset();
};

openBtn.addEventListener('click', () =>{
  modal.classList.add('modal-showed')
});

closeBtn.addEventListener('click', closeModal);

regForm.addEventListener('submit', (event) =>{
  event.preventDefault();

  const password = regForm.password.value;
  const confirmPassword = regForm.confirmPassword.value;

  if (!regForm.checkValidity()) {
    alert('Пожалуйста, заполните все поля корректно');
    return;
  };


  if (password !== confirmPassword) {
    alert('Пароли не совпадают!');
    return;
  };

  const userData = new FormData(regForm)
  const userData2 = Object.fromEntries(userData.entries())

  user = userData2;

  console.log('Регистрация успешна! Данные пользователя:', user);

  closeModal();
});

