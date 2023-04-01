/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    const buttonMenu = document.querySelector('[data-toggle="push-menu"]');
    const body = document.getElementsByTagName('body')[0];
    buttonMenu.addEventListener('click', (e) => {
      e.preventDefault();
      body.classList.toggle('sidebar-open');
      body.classList.toggle('sidebar-collapse');
    });
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    const register = document.querySelector('.menu-item_register');
    const buttonLogin = document.querySelector('.menu-item_login');
    const buttonlogout = document.querySelector('.menu-item_logout');

    register.addEventListener('click', (e) => {
      e.preventDefault();
      const loginElement = App.getModal('register');
      loginElement.open();
    });

    buttonLogin.addEventListener('click', (e) => {
      e.preventDefault();
      const loginElement = App.getModal('login');
      loginElement.open();
    });

    buttonlogout.addEventListener('click', (e) => {
      e.preventDefault();
      User.logout((err, response) => {
        if (response.success) {
          App.setState('init');
        };
      });
    });
  }
}