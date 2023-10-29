
/**
 * Finds the longest common prefix among an array of strings.
 * @param {string[]} strs - An array of input strings.
 * @return {string} - The longest common prefix.
 */
var longestCommonPrefix = function(strs) {
    // Check if the input array is empty or null, and return an empty string if true.
    if (!strs || strs.length === 0) {
        return "";
    }

    // Initialize the prefix as an empty string.
    let pref = "";

    // Iterate through the characters of the first string in the array.
    for (let i = 0; i < strs[0].length; i++) {
        // Get the current character from the first string.
        let currentChar = strs[0][i];

        // Iterate through all strings in the array to check if the current character
        // is a common prefix among them.
        for (let j = 0; j < strs.length; j++) {
            // Check if the current character is not present in the same position in any of the strings,
            // or if the length of the current character is 0 (an empty string).
            if (currentChar.length === 0 || currentChar !== strs[j][i]) {
                return pref; // Return the prefix found so far.
            }
        }

        // If the current character is a common prefix among all strings, add it to the prefix.
        pref += currentChar;
    }
    
    // Return the final common prefix found.
    return pref;
};

// Test Cases
console.log(longestCommonPrefix(["flower", "flour", "flow"])) // Should output "flo"
console.log(longestCommonPrefix(["dog", "car", "racecar"])) // Should output ""
console.log(longestCommonPrefix(["apple", "ape", "april"])) // Should output "ap"
console.log(longestCommonPrefix([])) // Should output ""
console.log(longestCommonPrefix(null)) // Should output ""
