/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest;

    xhr.responseType = 'json';
    try {
        xhr.open(options.method, options.url);
        xhr.send(options.data);    
    }
    catch (e) {
       console.log(e);
    }

    xhr.onload = () => {
        options.callback(xhr.error, xhr.response);
    }

};
