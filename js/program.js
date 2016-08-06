//Объявляем пустой массив и логическую переменную
var arrNames = [];
var result = "Ошибка! Нет такого имени.";
//Добавляем пять имён циклом
for ( var n = 0; n < 5; n++) {
	arrNames[n] = prompt("Добавить имя в массив:", '');
}
//вводим одно имя из пяти
var userName = prompt("Введите имя пользователя:", '');
//ищем совпадения
for (i = 0; i < arrNames.length; i++){
	if ( userName != arrNames[i]) continue;  
		result = userName + ' , вы успешно вошли.'; break;
}
//выводим результат
alert(result);
//просто смотрим массив в консоле
console.log(arrNames);