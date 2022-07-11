// Sort array terlebih dahulu, kemudian rotasi ke kiri sesuai dengan nilai yang telah ditentukan.
//
// Contoh Sort array:
// Input: [4,5,2,1,3]
// Output: [1,2,3,4,5]

//Contoh RotateLeft:
//Input: 4, [1,2,3,4,5]
//Output: [5,1,2,3,4]

// Explanation RotateLeft:
// untuk melakukan rotasi kiri dengan nilai 4, array mengalami urutan perubahan berikut:
// [1,2,3,4,5] -> [2,3,4,5,1] -> [3,4,5,1,2] -> [4,5,1,2,3] -> [5,1,2,3,4]

function sort(arr) {
  let nums = [];
  for (let i = 0; i < arr.length; i++) {
    nums.push(arr[i]);
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  return nums;
}

function rotateLeft(d, arr) {
  let nums = [];
  for (let i = 0; i < arr.length; i++) {
    nums.push(arr[i]);
  }
  for (let i = 0; i < d; i++) {
    let temp = nums[0];
    for (let j = 0; j < nums.length - 1; j++) {
      nums[j] = nums[j + 1];
    }
    nums[nums.length - 1] = temp;
  }
  return nums;
}

let nums = [4, 5, 2, 1, 3];
let sorted = sort(nums);
console.log(sorted);
rotated = rotateLeft(4, sorted);
console.log(rotated);

module.exports = { sort, rotateLeft };
