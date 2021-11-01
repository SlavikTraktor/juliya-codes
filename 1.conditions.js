let a = 5;
let b = 20;
let c = 15;

// a*x*x + b*x + c = 0
let D = b * b - 4 * a * c;

if (D > 0) {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    console.log(x1, x2);

} else if (D == 0) {
    let x1 = -b / (2 * a);

    console.log(x1);
} else {
    console.log("not found")
}

