let arr = [4, 316, 3, -11, 36, 7, 8, 11, 29, 3, 14];
let arrLen = arr.length;

// for (let i = 0; i < arrLen; i++) {
//   if (arr[i] % 2 == 0) {
//     arr.splice(i, 1);
//     i--;
//   }
// }

// for (let i = arrLen; i >= 0; i--) {
//   if (arr[i] % 2 == 0) {
//     arr.splice(i, 1);
//   }
// }

// const arr2 = arr.filter((v) => v % 2 !== 0);
// console.log(arr2);

const arr3 = [];

for (let i = 0; i < arrLen; i++) {
  if (arr[i] % 2 !== 0) {
    arr3.push(arr[i]);
  }
}

console.log(arr3);