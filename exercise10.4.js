let name = prompt("Введите свое имя");
let yearBirth = +prompt("Введите год своего рождения");
let age = 2023-yearBirth;
if(isNaN(yearBirth)){
  alert("Год должен быть числом");
} else if(age % 10 == 1){
  alert(`${name}: ${age} год`);
} else if(age % 10 == 2 || age % 10 == 3 ||age % 10 == 4){
  alert(`${name}: ${age} года`)
} else {
  alert(`${name}: ${age} лет`)
}