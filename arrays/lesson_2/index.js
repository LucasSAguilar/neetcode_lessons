class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    static isAnagram(s, t) {
       const t_response = t.split("").sort().join();
       const s_response = s.split("").sort().join();
    
        return t_response === s_response;
    }
}

console.log(Solution.isAnagram("racecar", "carrace"));
console.log(Solution.isAnagram("jar", "jam"));

// Expected: first: true / second: false