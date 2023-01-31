/*1*/

let userAge = prompt('Введіть ваш вік:');

userAge = +userAge;

if (userAge > 0 && userAge < 12) {
    alert('Ви дитина!');
}else if (userAge >= 12 && userAge < 18){
    alert('Ви підліток!');
}else if (userAge >= 18 && userAge < 60){
    alert('Ви дорослий!');
}else if (userAge >= 60 && userAge < 100){
    alert('Ви пенсіонер!');
}else if (userAge > 100){
    alert('В Україні до такого віку не доживають)');
}else{
    alert('Введіть корректні дані!');
}

/*2*/

const USER_NUMBER = Number(prompt('Введіть число від 0 до 9:'));

if (USER_NUMBER == 0) {
    alert(')');
}else if (USER_NUMBER == 1){
    alert('!');
}else if (USER_NUMBER == 2){
    alert('@');
}else if (USER_NUMBER == 3){
    alert('#');
}else if (USER_NUMBER == 4){
    alert('$');
}else if (USER_NUMBER == 5){
    alert('%');
}else if (USER_NUMBER == 6){
    alert('^');
}else if (USER_NUMBER == 7){
    alert('&');
}else if (USER_NUMBER == 8){
    alert('*');
}else if (USER_NUMBER == 9){
    alert('(');
}else{
    alert('Введіть корректні дані!');
}

/*3*/



