let name = prompt("Введите свое имя");
let yearBirth = +prompt("Введите год своего рождения");
let age = 2023 - yearBirth;
if(isNaN(yearBirth)){
  alert("Год должен быть числом")
} else {
  alert(`${name}: ${age}`)
}