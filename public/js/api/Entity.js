class Entity {
  static URL = '';

  static list(data, callback) {
    if (this.URL === '/transaction') {
      createRequest({
        url: this.URL + '?account_id=' + data,
        method: 'GET',
        data: data,
        callback: callback
      })
    } else {
      createRequest({
        url: this.URL + '?' + data,
        //  url: this.URL,
        method: 'GET',
        data: data,
        callback: callback
      })
    }
  }

  /**
   * Создаёт счёт или доход/расход с помощью запроса
   * на сервер. (в зависимости от того,
   * что наследуется от Entity)
   * */
  static create(data, callback) {
    createRequest({
      url: this.URL,
      method: 'PUT',
      data: data,
      callback: callback
    })
  }

  /**
   * Удаляет информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static remove(data, callback) {
    createRequest({
      url: this.URL,
      method: 'DELETE',
      data: data,
      callback: callback
    })
  }
}
