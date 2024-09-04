'use strict';
//Задание 1
let name;
let admin;
name = 'Джон';
admin = name ;
alert(admin);

//Задание 2
let city = prompt('Введите название города');
let yearOfFoundation = prompt('Введите год образования');
let population = prompt('Введите население города');
let ageCity = 2024 - yearOfFoundation;
alert(`Городу ${city} исполнилось ${ageCity} лет с момента его образования.Население - ${population} человек`);

//Задание 3
let r = prompt('Введите радиус круга');
let S = Math.PI * (r**2);
alert(`Площадь круга с радиусом ${r} равна ${S}`);

//Задание 4
let a = +prompt('Введите первое число');
let b = +prompt('Введите второе число');
alert(`Сумма = ${a + b},Разность = ${a - b}, Частное = ${a / b}, Произведение = ${a * b}`);
