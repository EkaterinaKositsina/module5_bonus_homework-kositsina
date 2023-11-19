let age = +prompt("Введите свой возраст");
if(isNaN(age)){
  alert("Год должен быть числом!");
let creditAmount;
} else if(age<18){
    alert ("Вам нет 18 лет. Мы не можем выдать вам кредит.")
} else if(age>=18 && age<=21){
    creditAmount = + prompt("Мы можем вам выдать максимум 5000. Введите сумму, кратную 1000.")
} else if(age>21 && age<=35){
    creditAmount = + prompt("Мы можем вам выдать максимум 400000. Введите сумму, кратную 1000.")
} else if(age>35 && age<=65){
    creditAmount = + prompt("Мы можем вам выдать максимум 1000000. Введите сумму, кратную 1000.")
} else if(age>65){
    alert("Мы не можем выдать вам кредит.")   
}
if (creditAmount % 1000 !==0){
  alert(`Вы ввели значение не кратное 1000. Мы можем выдать вам ${(Math.floor(creditAmount/1000))*1000}`)
}