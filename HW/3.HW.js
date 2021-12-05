let arr = [-1, -24, 316, 3, -11, 36, 7, 8, 11, 29, 3, 14, 123, 5, 6, 23];

let arr2 = [];
let MAX = 7;

for (let i = 0; i < arr.length; i += MAX) {
  let triple = [];
  for (let j = 0; j < MAX; j++) {
    if (arr[i + j]) {
      triple.push(arr[i + j]);
    }
  }
  arr2.push(triple);
}
console.log(arr2);

arr2.forEach((v, i) => {
  let arrInner = i % 2 === 1 ? v.reverse() : v;
  let res = arrInner.reduce((acc, v) => acc + v + " ", "");
  console.log(res);
});

// -1 -24 316
// 36 -11 3
// 7 8 11
// 14 3 29

// let reverse = false;

// for (let i = 0; i < arr.length; i = i + 3) {
//     if(!reverse) {
//         let str = arr[i];
//         if(arr[i + 1]) {
//             str += ' ' + arr[i + 1];
//         }
//         if(arr[i + 2]) {
//             str += ' ' + arr[i + 2];
//         }
//         console.log(str);
//         reverse = true;
//     } else {
//         let str = '';
//         if(arr[i + 2]) {
//             str += ' ' + arr[i + 2];
//         }
//         if(arr[i + 1]) {
//             str += ' ' + arr[i + 1];
//         }
//         if(arr[i]) {
//             str += ' ' + arr[i];
//         }

//         console.log(str.substr(1));
//         reverse = false;
//     }
// }
