let arr = [2, 32, 4, -5, 18, 7];
let x = arr[0];
let arrLen = arr.length;

for (let i = 0; i < arrLen; i++) {

    if (x > arr[i]) {
        x = arr[i]
    }

}

console.log(x)