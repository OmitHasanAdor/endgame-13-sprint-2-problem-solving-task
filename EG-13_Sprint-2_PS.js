// 1. Reverse a String

function reverseString(str) {
    // Write your code here
    const reverse = str.split("")
    const result = []
    for (let i = 0; i < reverse.length; i++) {
        result.unshift(reverse[i])
    }
    return result.join("")
}
// console.log(reverseString("hello"))

// 2. Find Maximum
function findMax(nums) {
    // Write your code here
    let max = nums[0]
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] > max) {
            max = nums[index]
        }
        // return max

    }
    return max
}
// console.log(findMax([1,2,2,5,6,3,5,2,9]))

// 3. Check for Palindrome
function isPalindrome(str) {
    // Write your code here
    const reverse = str.split("")
    let result = []
    for (let i = 0; i < reverse.length; i++) {
        result.unshift(reverse[i])
    }
    let reverseStr = result.join("")
    if (str === reverseStr) {
        return true
    }
    return false

}
// console.log(isPalindrome("raceecar"))

// 4. Sum Array Elements
function sumArray(nums) {
    // Write your code here
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i]

    }
    return sum
}
// console.log(sumArray([10, 20, 30, 40]))

// 5. Count Vowels
function countVowels(str) {
    // Write your code here
    let count = 0
    const vowels = ["a", "e", "i", "o", "u"]
 for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count = count + 1
        }
    }
    return count
  
}
console.log(countVowels("raceecar"))




