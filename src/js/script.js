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
    window.location.reload();
}

/*2*/


const USER_NUMBER = Number(prompt('Введіть число від 0 до 9:'));
switch (USER_NUMBER) {
  case 0:
    alert(')');
    break;
  case 1:
    alert('!');
    break;
  case 2:
    alert('@');
    break;
  case 3:
    alert('#');
    break;
  case 4:
    alert('$');
    break;
  case 5:
    alert('%');
    break;
  case 6:
    alert('^');
    break;
  case 7:
    alert('&');
    break;
  case 8:
    alert('*');
    break;
  case 9:
    alert('(');
    break;
  default:
    alert('Введіть корректні дані!');
    window.location.reload();
}


/*3*/

// const USER_THREE_NUMBER = prompt('Введіть трицифрове число:');

// if (USER_THREE_NUMBER > 99 && USER_THREE_NUMBER < 999){
//     if (
//         USER_THREE_NUMBER[0] == USER_THREE_NUMBER[1] ||
//         USER_THREE_NUMBER[0] == USER_THREE_NUMBER[2] ||
//         USER_THREE_NUMBER[1] == USER_THREE_NUMBER[2]
//       ) {
//         alert ('У вашому числі є одинакові цифри')
//       }else {
//         alert ('У вашому числі не має одинакових цифр')
//       }
// }  else {
//     alert ('Введіть корректні дані!');
//     window.location.reload();
// }   


/*4*/

// const YEAR = prompt('Введіть будь-який рік');
// if(YEAR  > 0){
//   if(YEAR  % 4 == 0 && YEAR  % 100 != 0 ){
//     alert(`${YEAR} високосний`);
//   }else{
//     alert(`${YEAR} не високосний`);
//   }
// }else{
//   alert('Введіть корректні дані!');
//   window.location.reload();
// }

/*5*/
// const USER_FIVE_NUMBER = Number(prompt('Введіть п`ятирозрядне число:'));
// const USER_NUMB = String(USER_FIVE_NUMBER).length - 1;
// for (let i = 0; i < String(USER_FIVE_NUMBER).length / 2; i++) {
//   if (String(USER_FIVE_NUMBER).length == 5) {
//     if (String(USER_FIVE_NUMBER)[i] == String(USER_FIVE_NUMBER)[USER_NUMB - i]) {
//       alert('Ваше число є паліндромом');
//       break;
//     } else {
//       alert('Ваше число не є паліндромом');
//       break;
//     }
//   } else {
//     alert('Введіть корректні дані!');
//     window.location.reload();
//     break;
//   }
// }

/*6*/

const USER_MONEY = Number(prompt('Введіть суму доларів (USD) яку хочете поміняти'));
if (USER_MONEY > 0){
    const CHANGES = prompt('Впишіть в поле вводу валюту для конвертації: eur, uah або azn');
    if (CHANGES == "eur"){
        alert (`Ваша сума: ${(USER_MONEY * 1,09)} EUR`);window.location.reload();
    } else if (CHANGES == "uah") {
        alert(`Ваша сума: ${(USER_MONEY * 40.2).toFixed(2)} UAH`);window.location.reload();
    } else if (CHANGES == "azn") {
        alert(`Ваша сума: ${(USER_MONEY * 1.70).toFixed(2)} AZN`);window.location.reload();
    } else {
        alert('Введіть корректні дані!'); 
        window.location.reload();
    }
} else {
    alert ('Введіть корректні дані!')
    window.location.reload();
}

/**7 */

const USER_BUY_AMONUT = Number(prompt('Введіть суму покупки:'));
if (USER_BUY_AMONUT > 0){
    if (USER_BUY_AMONUT >=200 && USER_BUY_AMONUT <300){
        alert (`Ваша знижка: ${(USER_BUY_AMONUT - USER_BUY_AMONUT * 0,03).toFixed(2)}`);window.location.reload();
    } else if (USER_BUY_AMONUT >=300 && USER_BUY_AMONUT <500) {
        alert(`Ваша знижка: ${(USER_BUY_AMONUT - USER_BUY_AMONUT * 0,05).toFixed(2)}`);window.location.reload();
    } else if (USER_BUY_AMONUT >=500) {
        alert(`Ваша знижка: ${(USER_BUY_AMONUT - USER_BUY_AMONUT * 0,07).toFixed(2)}`);window.location.reload();
    } else {
        alert(`Немає знижки: ${USER_BUY_AMONUT.toFixed(2)}`); 
        window.location.reload();
    }
} else {
    alert ('Введіть корректні дані!')
    window.location.reload();
}




