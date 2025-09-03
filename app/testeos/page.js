// export default function JsTests() {
  // for (let i = 1; i <= 50; i++) {
  //     const element = i;
  //     if (i % 3 === 0 && i % 5 === 0) {
  //     console.log("Fizzbuzz");
  //     }
  //     if (i % 3 === 0) {
  //     console.log("fizz");
  //     }
  //     if (i % 5 === 0) {
  //     console.log("buzz");
  //     } else {
  //     console.log(i);
  //     }
  // }

  // for (let i = 10; i > 0; i--) {
  //   const element = i;
  //   console.log(element);
  // }

  //     let add = 0;
  //     for (let i = 1; i <= 100; i++) {
  //     add += i
  // }
  // console.log(add);

  //   function primeNumber(a) {
  //     if (a <= 1) return false;

  //     for (let i = 2; i < a; i++) {
  //       if (a % i === 0) {
  //         return false;
  //       }
  //     }
  //     return true
  //   }
  // console.log(primeNumber(12));

  // function factorial(n) {
  //     let result = 1;
  //     for (let i = n; i > 0; i--) {
  //         result *= i

  //     }
  // return result
  // }
  // console.log(factorial(19));

  //dado un array devuelve otro solo con numeros pares
  // function evens(arr) {
  //     const evens = arr.filter(even=> even %2 === 0)
  //     return evens;
  // }
  // console.log(evens([12,22,23,41,52,51]));

  // function uniques(arr){
  // return [...new Set(arr)]
  // return arr.filter((item, index) => arr.indexOf(item) === index)
  //indexOf pilla la primera posicion en la que aparece el valor, si coincide con el index se queda, si no se va
  // }
  // console.log(uniques([3,10,3,3,4,5,5,5]));

  // function bubbleSort(arr) {
  //     let n = arr.length;
  //     for (let i = 0; i < n ; i++) {
  //         for(let j = 0; j < n - i - 1 ; j++){
  //             if (arr[j] > arr[j + 1]){
  //                 let temp = arr[j]
  //                 arr[j]= arr[j+1]
  //                 arr[j+1] = temp
  //             }
  //         }
  //     }
  //     return arr
  // }
  // console.log(bubbleSort([9,2,3,6,5,2,3]));

//   const ra = ["hola", "mundo", "javascript", "js"];
//   function largest(str) {
//     const longest = str.reduce((a, b) => (a.length >= b.length ? a : b));
//     return longest;
//   }
//   console.log(largest(ra));

//   function convertStr(str) {
//     return str.toString().replaceAll(",", " ");
//   }
//   console.log(convertStr(ra));

//   function invert(str) {
//     return str.split("").reverse().join("");
//   }
//   console.log(invert("hello paco"));

//   function isPalindrome(str) {
//     if (str.split("").reverse().join("") === str) {
//       return true;
//     }
//   }
//   console.log(isPalindrome("hello"));

//   return <h1>hola fusuma</h1>;
// }
