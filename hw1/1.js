/*  Напишите функцию concatenate, которая принимает массив строк и символ-разделитель. 
    Функция должна вернуть строчку склеенную по данному разделителю. 
*/

function concatenate(arr, sep) {
    return arr.join(sep);
}

console.log(concatenate(['Я','Учусь','на','лучшей','кафедре'], ' '));