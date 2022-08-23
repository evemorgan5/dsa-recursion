/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) return 0;

  const lenOfFirst = words[0].length;
  const maxLenOfRest = longest(words.slice(1));

  return lenOfFirst > maxLenOfRest ? lenOfFirst : maxLenOfRest;
}


/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) return "";
  return str[0] + everyOther(str.slice(2));
}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val) {
  if (arr.length === 0) return false;
  if (arr[0] === val) return true;

  return find(arr.slice(1), val);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  //tacocat   acoca   coc  o
  if (str.length === 0 || str.length === 1) return true;
  if (str[0] !== str[str.length-1]) return false;

  return isPalindrome(str.slice(1, str.length-2));
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 0) return "";
  return str[str.length-1] + revString(str.slice(0, str.length-1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */
// FIXME: still unsure looked at solution
function findIndex(arr, val) {
  if (arr.length === 0) return -1;
  if (arr[0] === val) return 0;

  const count = findIndex(arr.slice(1), val);

  return count === -1 ? -1 : count + 1;
}

/** gatherStrings: given an object, return an array of all of the string values. */
// {"a":"apple", "b": "berry", "c":"cherry"}
function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      stringArr.push(...gatherStrings(obj[key]));
    }
    if (typeof obj[key] === "string") {
      stringArr.push(obj[key]);
    }
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {


}

// you might find this problem easier if you change the function signature to:
//
function binarySearch(arr, val, left = 0, right = arr.length) {

}


module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
