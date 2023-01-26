"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b**2 - 4 * a * c;
  if (discriminant === 0) {
      let answerFirst = -b / (2 * a);
          arr.push(answerFirst);
  } else if (discriminant > 0) {
      let answerFirst = (-b + Math.sqrt(discriminant)) / (2 * a);
          arr.push(answerFirst);
      let answerSecond = (-b - Math.sqrt(discriminant)) / (2 * a);
          arr.push(answerSecond);
  } 
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent)) {
    return false;
  }
  if(isNaN(contribution)) {
    return false;
  }
  if(isNaN(amount)) {
    return false;
  }
  if(isNaN(countMonths)) {
    return false;
  }

  let P = percent / 100 / 12;
  let S = amount - contribution;
  let countM = S * (P + (P / (((1 + P)**countMonths) - 1)));
  let totalAmount = countM * countMonths;

  return Number(totalAmount.toFixed(2));
}