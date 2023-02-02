let i = 8;
const abc = () => {
  i = 10;
};
//console.log(i);

const multiSum = (a, b) => a + b;
const currySum = (a) => (b) => a + b;

//console.log("Multi and Curry Sum", multiSum(2, 3), currySum(2)(3));

// Add Numbers
//A=[1,2,3,4,5,6,7,8,9,10]
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arraySum = (numbers) => {
  return numbers.reduce((acc, value) => {
    debugger;
    return acc + value;
  }, 0);
};
console.log("Array sum with sReduce Method", arraySum(array));

// Flat Array
const mainArray = [1, 2, 3, 4, [4, 5, 6, [8, 9, 10]]];
//const flatArray = [].concat(...mainArray);
const flatArray = mainArray.flat(2);
const flatMapArray = mainArray.flatMap((num) => num);
const objArray = [
  { userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
  { userId: 2, username: "Mike", attributes: ["Lovely"] }
].flatMap((x) => x.attributes);
// Output => ["Nice", "Cute", "Lovely"]

//console.log("Flat and FlatMap Array", flatArray, flatMapArray, objArray);

const student = (name) => {
  const yourGrade = (percentage) => {
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
  (resolve) => {
    setTimeout(() => {
      resolve("Promise Resolved");
    }, 2000);
  },
  (reject) => {}
);

//promise.then((value) => console.log(value));

var age = 12;

const userObj = {
  age: 15,
  displayAge() {
    //console.log("Display Age", this.age);
  },
  showAge: () => {
    //console.log("Show Age 1", age);
  }
};

userObj.displayAge();
userObj.showAge();

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
    console.log(difference, indexMap);
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
