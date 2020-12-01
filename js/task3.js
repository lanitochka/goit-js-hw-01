const ADMIN_PASSWORD = prompt('введите пароль');
console.log(ADMIN_PASSWORD === 'jqueryismyjam');

let message;

if (ADMIN_PASSWORD === 'jqueryismyjam') {
    message = 'Добро пожаловать!';  

} else if (ADMIN_PASSWORD === null) {
    message = 'Отменено пользователем!';  

} else {
    message = 'Доступ запрещен, неверный пароль!';    
}

alert(message);