// 1==Запиши условие в инструкции if так, чтобы функция работала правильно.

// function checkAge(age) {
//   if (age >= 18) { 
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

// 2==Функция checkPassword получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения.

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  // Change code below this line

  let message;

  if (password === ADMIN_PASSWORD) {
    message = "Welcome!";
  } else {
    message = "Access denied, wrong password!";
  }

  return message;
  // Change code above this line
}
console.log(checkPassword)