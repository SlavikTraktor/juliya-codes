let arr = [-1, -24, 316, 3, -11, 36, 7, 8, 11, 29, 3, 14];
let arrLen = arr.length;
const arr3 = [];

for (let i = 0; i < arrLen; i++) {

    if (arr[i] > arr[i+1] && arr[i] > arr[i-1]) {
      arr3.push(arr[i]); 
    }
    
}
if (arr[0] > arr[1]) {
    arr3.push(arr[0]);
}
if (arr[arr.length-1] > arr[arr.length-2]){
    arr3.push(arr[arr.length-1]);
}
let arr3Len = arr3.length;
console.log(arr3);