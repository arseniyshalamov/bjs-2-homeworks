//задание 1
function getArrayParams(...arr) {
  let min, max, sum;
  min = Infinity;
  max = -Infinity;
  sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr.length === 0) {
      return 0;
    }
    if (arr[i] > max) {
			max = arr[i]
		}
		if (arr[i] < min) {
			min = arr[i]
		}
    sum += arr[i];
  }

  avg = Number((sum / arr.length).toFixed(2))

  return { min: min, max: max, avg: avg } || 0;
}

//задание 2
function summElementsWorker(...arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr.length === 0) {
      return 0;
    }
    sum += arr[i];
  }
  return sum || 0;
}

function differenceMaxMinWorker(...arr) {
  let min = 0;
  let max = 0;

  if (arr.length === 0) {
    return 0;
  }

  min = Math.min(...arr);
  max = Math.max(...arr);
  different = max - min;
  return different || 0;
}


function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 0) {
      return 0;
    }
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement || 0;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 0) {
      return 0;
    }
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  return sumEvenElement / countEvenElement || 0;
}

//задание 3
function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    if (arr[i].length === 0) {
      return 0;
    }
    const resultFunc = func(...arrOfArr[i])
    if (resultFunc > maxWorkerResult) {
      maxWorkerResult = resultFunc;
    }
  }
return maxWorkerResult || 0;
}

const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72