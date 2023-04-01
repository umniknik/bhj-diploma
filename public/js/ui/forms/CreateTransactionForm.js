/**
 * Класс CreateTransactionForm управляет формой
 * создания новой транзакции
 * */
class CreateTransactionForm extends AsyncForm {
  /**
   * Вызывает родительский конструктор и
   * метод renderAccountsList
   * */
  constructor(element) {
    super(element);
    this.renderAccountsList();
  }

  /**
   * Получает список счетов с помощью Account.list
   * Обновляет в форме всплывающего окна выпадающий список
   * */
  renderAccountsList() {
    const accountsSelect = this.element.querySelector('.accounts-select');
    if (User.current()) {
      Account.list(User.current().id, (err, response) => {
        this.element.querySelector('.accounts-select').innerHTML = '';
        response.data.forEach(element => {
          accountsSelect.insertAdjacentHTML('beforeEnd', `<option value="${element.id}">${element.name}</option>`);
        });
      });
    }
  }

  /**
   * Создаёт новую транзакцию (доход или расход)
   * с помощью Transaction.create. По успешному результату
   * вызывает App.update(), сбрасывает форму и закрывает окно,
   * в котором находится форма
   * */
  onSubmit(data) {
    Transaction.create(data, (err, response) => {
      if (response.success) {
        this.element.reset();
        this.element.closest('.modal').style.display = '';
        App.update();
      }
    });
  }
}