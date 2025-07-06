class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    static hasDuplicate(nums) {
        return new Set(nums).size < nums.length;
    }
}

console.log(Solution.hasDuplicate([1, 2, 3, 3]));
console.log(Solution.hasDuplicate([1, 2, 3, 4]));

// Expected: first: true / second: false