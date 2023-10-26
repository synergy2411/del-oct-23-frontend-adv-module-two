
// function greet(arg1, arg2) {
//     console.log(this);
// }

// let user = {
//     name: "John"
// }
// let userTwo = {
//     name: "Jenny"
// }
// let userThree = {
//     name: "Jack"
// }
// let userFour = {
//     name: "Jill"
// }

// const boundedFn = greet.bind(user);
// const boundedFn2 = greet.bind(userTwo);

// // boundedFn();
// // boundedFn2();


// greet.call(userThree, "One", "Two")

// greet.apply(userFour, ["Three", "Four"])


// Promises -> Async Activity

// then().then().then().catch()

// Async...await

// any / race / allSettled / all / reject / resolve


var x = 101;
function demo() {
    // let this = {};
    ++x;
    this.x = x;
    // return this;
}


let bar = new demo()

console.log(bar.x);     // 102