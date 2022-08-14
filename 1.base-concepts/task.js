"use strict";
function solveEquation(a, b, c) {
  if (a==0) return "Ошибка, недопустимое значение";
  let d = b * b - 4 * a *c;
  let x1,x2;
  if (d > 0) {
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    return [x1,x2]
  } else if (d == 0) {
    x1 = -b / (2 * a);
    return [x1] ;
} else if (d < 0) {
    return [] ;
}
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
