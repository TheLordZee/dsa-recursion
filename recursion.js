/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  if (i === nums.length) return 0; 
  return nums[i] * product(nums, i+1)
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0) {
  if(i === words.length) return 0;
  if(words[i].length > longest(words, i+1)){
    return words[i].length;
  }else{
    return longest(words, i+1)
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0) {
  if(i === str.length) return '';
  if(i === 0 || i % 2 === 0){
    return str[i] + everyOther(str, i + 1)
  }else{
    return everyOther(str, i + 1)
  }
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if(str.length === 0 || str.length === 1) return true;
  return (str[0] === str[str.length - 1]) === isPalindrome(str.substring(1, str.length - 1)) 
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if(i === arr.length) return -1;
  if(arr[i] === val){
    return i;
  }else{
    return findIndex(arr, val, i+1)
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i=0) {
  if(i === str.length) return '';
  return str[str.length - 1 - i] + revString(str, i+1)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, arr=[]) {
  for(let key of keys(obj)){
    if(typeof(obj[key]) === 'string'){
      arr.push(obj[key])
   }
   if(typeof(obj[key]) === 'object'){
     arr.concat(gatherStrings(obj[key], arr)) 
   }
 }
 return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

 function binarySearch(arr, val) {
  if(arr.length === 1 && arr[0] !== val) return -1;
  let currIndex = Math.floor((arr.length - 1)/2);
  if(arr[currIndex] === val){
    return currIndex;
  }else if(arr[currIndex] < val){
    return binarySearch(arr.slice(currIndex + 1), val)
  }else if(arr[currIndex] > val){
    arr = arr.slice(0, currIndex)
    return binarySearch(arr, val)
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
