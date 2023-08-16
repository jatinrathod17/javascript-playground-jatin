let i = 8;
const abc = () => {
  i = 10;
};
//console.log(i);

const multiSum = (a, b) => a + b;
const currySum = a => b => a + b;

//console.log("Multi and Curry Sum", multiSum(2, 3), currySum(2)(3));

// Add Numbers
//A=[1,2,3,4,5,6,7,8,9,10]
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arraySum = numbers => {
  return numbers.reduce((acc, value) => {
    debugger;
    return acc + value;
  }, 0);
};
//console.log("Array sum with sReduce Method", arraySum(array));

// Flat Array
const mainArray = [1, 2, 3, 4, [4, 5, 6, [8, 9, 10]]];
//const flatArray = [].concat(...mainArray);
const flatArray = mainArray.flat(Infinity);
const flatMapArray = mainArray.flatMap(num => num);
const objArray = [
  { userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
  { userId: 2, username: "Mike", attributes: ["Lovely"] }
].flatMap(x => x.attributes);
// Output => ["Nice", "Cute", "Lovely"]

//console.log("Flat and FlatMap Array", flatArray, flatMapArray, objArray);

const student = name => {
  const yourGrade = percentage => {
    if (percentage > 35) {
      console.log(`Great ${name} You are Pass`);
    } else {
      console.log(`Better Luck Next Time ${name}, You are Fail`);
    }
  };
  return yourGrade;
};

const studentInfo = student("Jatin");
const studentInfo1 = student("Nikunj");
//studentInfo(70);
//studentInfo1(32);

const promise = new Promise(
  resolve => {
    setTimeout(() => {
      resolve("Promise Resolved");
    }, 2000);
  },
  reject => {}
);

//promise.then((value) => console.log(value));

var age = 12;

const userObj = {
  age: 15,
  displayAge() {
    console.log("Display Age", this.age);
  },
  showAge: () => {
    console.log("Show Age", age);
  }
};

// userObj.displayAge();
// userObj.showAge();

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const sum = (nums, target) => {
  let result = [];
  let indexMap = new Map();

  for (i = 0; i < nums.length; i++) {
    let difference = target - nums[i];
    if (indexMap.has(difference)) {
      result[0] = indexMap.get(difference);
      result[1] = i;
      break;
    } else {
      indexMap.set(nums[i], i);
    }
  }

  return result;
};

// console.log(sum([2, 4, 1, 15, 7], 9));

const sumOfUnequalArray = (array1, array2) => {
  let a, b;
  if (array1.length > array2.length) {
    a = array1;
    b = array2;
  } else {
    a = array2;
    b = array1;
  }
  return a.map((num, idx) => num + (b[idx] || 0));
};

// console.log(sumOfUnequalArray([1, 2, 3, 4], [5, 6, 7, 8, 100]));

// Call, Apply, Bind

let player = {
  firstName: "Virat",
  lastName: "Kohli"
};

let playerInfo = function (location) {
  // console.log(`${this.firstName} ${this.lastName}, ${location}`);
};

playerInfo.call(player, "Delhi");
playerInfo.apply(player, ["Ahmedabad"]);

let newPlayerInfo = playerInfo.bind(player, "Jamnagar");
newPlayerInfo();

// Increment / Decrement
// let count = 0;
// let increaseButton = document.getElementById("increment");
// let decreaseButton = document.getElementById("decrement");
// let counter = document.getElementById("counter");

// increaseButton.addEventListener("click", function () {
//   count++;
//   counter.innerHTML = count;
// });

// decreaseButton.addEventListener("click", function () {
//   count--;
//   counter.innerHTML = count;
// });

// <button id="increment">Increment</button>
// <button id="decrement">Decrement</button>
// <p id="counter"></p>

{
  /* <h2>Auto Increment Counter</h2>
<p id="count">0</p>
<button id="startButton">Start</button>
<button id="pauseButton">Pause</button>

const countElement = document.getElementById("count");
const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");

let count = 0;
let valid = null;

startButton.addEventListener("click", function () {
  if (valid === null) {
    valid = setInterval(function () {
      count++;
      countElement.textContent = count;
    }, 1000);
  }
});

pauseButton.addEventListener("click", function () {
  clearInterval(valid);
  valid = null;
}); */
}

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     const data = "Success";
//     if (data) {
//       resolve("Resolved");
//     } else {
//       reject("Error");
//     }
//   });
// }

// fetchData()
//   .then(res => console.log(res))
//   .catch(error => console.log(error));

// async function main() {
//   try {
//     const data = await fetchData();
//     console.log("Async Await", data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// main();

// function isValidEmail(email) {
//   const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
//   return emailRegex.test(email);
// }

// const enteredEmail = prompt("Enter an email address:");
// if (isValidEmail(enteredEmail)) {
//   console.log("Valid email address");
// } else {
//   console.log("Invalid email address");
// }

// let sumM = a => b => b ? sumM(a + b) : a;

// console.log(sumM(1)(2)(3)(4)());
