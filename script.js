///// 1 Задание /////

function sumArray(arr) {
    // Базовый случай
    if (arr.length === 0) {
      return 0;
    }
    // рекурсивный случай
    return arr[0] + sumArray(arr.slice(1));
  }
  
  const array = [2, 3, 5, 6, 7];
  console.log(sumArray(array));

///// 2 Задание /////

function findMax(arr) {
  if (arr.length === 0) throw new Error("Array cannot be empty");
  if (arr.length === 1) return arr[0];
  
  const [first, ...rest] = arr;
  const maxOfRest = findMax(rest);
  
  return first > maxOfRest ? first : maxOfRest;
  }
  
  console.log(findMax([-3, -1, -4, -2, -5]));

///// 4 Задание /////

const fibonacci = (() => {
    const cache = {};
    return function(n) {
      if (n === 0) return 0;
      if (n === 1) return 1;
      if (cache[n]) return cache[n];
      cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
      return cache[n];
    };
  })();
  
  console.log(fibonacci(15));