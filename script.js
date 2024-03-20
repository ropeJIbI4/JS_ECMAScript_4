// ""Получение данных о пользователе""

// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

// Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке

async function getUserData(userId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const users = await response.json();
    const user = users.find((el) => el.id === userId);

    console.log(user === undefined ? "User not found" : user);
  } catch (error) {
    console.error(error.message);
  }
}

getUserData(1);
getUserData(10);
getUserData(100);

// ""Отправка данных на сервер""

// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.

// *Подсказка *
// // Пример использования функции
// const user = {
// name: 'John Smith',
// age: 30,
// email: 'john@example.com'
// };

// saveUserData(user)
// .then(() => {
// console.log('User data saved successfully');
// })
// .catch(error => {
// console.log(error.message);
// });

// saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. Она отправляет POST-запрос на URL-адрес /users с указанием типа содержимого application/json и сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 200), функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщени

async function saveUserData(user, url) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error("Fault: " + response.status);
    }

    console.log(response.status);
    console.log("User save data");
  } catch (error) {
    console.error(error.message);
  }
}

const user = {
  name: "John Smith",
  age: 30,
  email: "john@example.com",
};
const url = "https://jsonplaceholder.typicode.com/users"; 

saveUserData(user, url)
  .then(() => {
    console.log("User save data");
  })
  .catch((error) => {
    console.log(error.message);
  });

// ""Изменение стиля элемента через заданное время""

// Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента и время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль элемента через указанное время.

// // Пример использования функции
// changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"

  function changeStyleDelayed(selector, delay) {
  setTimeout(() => {
    const element = document.querySelector(selector);
    if (element) {
      element.style.backgroundColor = 'purple';
    } else {
      console.log('Element not found');
    }
  }, delay);
}
changeStyleDelayed('.change__style', 2000);
  