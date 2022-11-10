// 0) Реалізувати функцію isWorkingAgePerson, яка буде перевіряти, чи працездатного людина віку (від 16 до 65). Функція приймає в якості параметра вік людини і повертає значення булевського типу.

const userAge = Number(prompt("Введіть ваш вік"));

function isWorkingAgePerson(age) {
  return age >= 16 && age < 65;
}

console.log(isWorkingAgePerson(userAge));

// 1) *Реалізувати функцію, яка приймає число і повертає булевське значення, чи воно просте (просте число ділитися без залишку тільки на себе і на одиницю).

const n = Number(prompt("Введіть довільне число"));

function isSimple(n) {
  if (n === 1 || n === 0) {
    return false;
  } else {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
}
console.log(isSimple(n));

// 2) Реалізувати функцію checkMultiplicity, яка приймає два числа і перевіряє, чи ділиться перше на друге націло (без залишку):
// checkMultiplicity(25, 5) // true
// checkMultiplicity(15, 3) // true
// checkMultiplicity(15, 5) // true
// checkMultiplicity(15, 4) // false

const checkMultiplicity = function (x, y) {
  return x % y === 0;
};
console.log(checkMultiplicity(15, 3));

// 3) Перевірка можливості існування трикутника. Реалізувати функцію, яка приймає довжини трикутника; функція повертає true, якщо треугольник можливий, і false, якщо ні (див. умови існування трикутника).

const isTriangle = function (a, b, c) {
  return a + b > c && a + c > b && b + c > a && (a > 0, b > 0, c > 0);
};
console.log(isTriangle(6, 5, 3));

// 4) Реалізувати функції розрахунку площі (або поверхні) наступної фігури (тіла): трикутника, прямокутника (або конуса, паралелепіпеда) в залежності від переданих розмірів фігури. Функція повинна повернути обчислене значення. Мінімум для однієї фігури на вибір.

function figureSqr(m, k) {
  return m * k;
}
console.log("figureSqr =", figureSqr(9, 5));
