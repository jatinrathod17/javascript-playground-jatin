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
