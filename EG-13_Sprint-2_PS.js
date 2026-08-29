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
// console.log(countVowels("raceecar"))

// 6. Two Sum
function twoSum(nums, target){
    // Write your code here
    for (let i  = 0; i  < nums.length; i ++) {
       for (let j  = i+1; j  < nums.length; j ++) {
       if (target==nums[i]+nums[j]) {
        return [i,j]
       }
        
       }
        
    }
}
// console.log(twoSum([2, 7, 11, 15],9))

// 7. Flatten a Nested Array
function flattenArray(arr){
    // Write your code here
     let result = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flattenArray(arr[i]))
        } else {
            result.push(arr[i])
        }
    }
    return result
}
// console.log(flattenArray([1, [2, [3, 4], 5]]))

// 8. Group Anagrams
function groupAnagrams(strs){
    // Write your code here
     const groups = {}
    for (let i = 0; i < strs.length; i++) {
        const word = strs[i]
        const key = word.split("").sort().join("")
        if (!groups[key]) {
            groups[key] = []
        }
        groups[key].push(word)
    }
    return Object.values(groups)
}
// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))

// 9. Longest Substring Without Repeating Characters
function lengthOfLongestSubstring(s){
    // Write your code here
     let left = 0
    let maxLength = 0
    let current = ""
    for (let right = 0; right < s.length; right++) {
        while (current.includes(s[right])) {
            current = current.slice(1)
            left++
        }
        current = current + s[right]
        if (current.length > maxLength) {
            maxLength = current.length
        }
    }
    return maxLength
}
// console.log(lengthOfLongestSubstring("abceabcbb"))

// 10. Deep Clone an Object
function deepClone(obj){
    // Write your code here
    if (obj === null || typeof obj !== "object") {
        return obj
    }
    if (Array.isArray(obj)) {
        return obj.map(deepClone)
    }
    const clonedObj = {}
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = deepClone(obj[key])
        }
    }
    return clonedObj
}
// console.log(deepClone({ a: 1, b: { c: 2 } }))
