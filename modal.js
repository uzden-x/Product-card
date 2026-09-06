export class Modal {
  constructor(id) {
    this.id = id;
    
    this.modalElement = document.getElementById(this.id);

    if (!this.modalElement) {
      console.error(`Ошибка, элемент с id ${this.id} не найден`);
      return;
    }

    this.closeButton = this.modalElement.querySelector('.close-button');

    this.bindCloseEvent();
  }

  open() {
    this.modalElement.classList.add('modal-showed');
  }

  close() {
    this.modalElement.classList.remove('modal-showed');
  }

  isOpen() {
    if (this.modalElement.classList.contains('modal-showed')) {
      return true;
    }
    else {
      return false;
    }
  }

  bindCloseEvent() {
    this.closeButton.addEventListener('click', () => {
      this.close();
    });
  }
}