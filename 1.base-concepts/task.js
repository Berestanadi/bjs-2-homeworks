"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  if (a==0) return "Ошибка, недопустимое значение";
  let d = (b**2) - (4 * a *c);
  let x,x1,x2;
  if (d > 0) {
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1,x2);
  } else if (d == 0) {
    x = -b / (2 * a);
    arr.push(x);
} else if (d < 0) {
  arr.push();
}
return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
   if (isNaN(percent)) {
   return totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
 } else if (isNaN(contribution)) {
   return totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
 } else if (isNaN(amount)) {
   return totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
 } 	
 let loanBody = amount - contribution;	
 let dateStart = new Date();	
 let diff = Date.parse(date) - Date.parse(dateStart);
 let creditTerm = Math.ceil(diff / 1000 / 60 / 60 / 24 / 30.5);	
 let P = percent / 12 / 100;
 let monthlyFee = loanBody * (P + (P / (((1 + P) ** creditTerm) - 1)));
     totalAmount = creditTerm * monthlyFee;				
   return Number(totalAmount.toFixed(2));	
}