class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    static twoSum(nums, target) {
        for(let i = 0; i < nums.length; i++){
            for(let j = i + 1; j < nums.length; j++){
                if(nums[i] + nums[j] === target){
                    return [i, j]
                }
            }   
        }
        return []
    }
}

console.log(Solution.twoSum([3,4,5,6], 7));
console.log(Solution.twoSum([4,5,6], 10));
console.log(Solution.twoSum([5,5], 10));
