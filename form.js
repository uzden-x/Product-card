export class Form {
  constructor(id) {
    this.id = id;

    this.formElement = document.getElementById(this.id);

    if (!this.formElement) {
      console.error(`Ошибка, элемент с id ${this.id} не найден`);
      return;
    }
  }

  getValues() {
    const formData = new FormData(this.formElement);
    return Object.fromEntries(formData.entries());
  }

  isValid() {
    return this.formElement.checkValidity();
  }

  reset() {
    this.formElement.reset();
  }
  
}

