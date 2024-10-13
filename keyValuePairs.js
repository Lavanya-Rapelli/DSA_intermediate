//count occurences
function countOccurrences(arr) {
    let counts = {};
    for (let num of arr) {
        counts[num] = (counts[num] || 0) + 1;
    }
    return counts;
}

console.log(countOccurrences([1, 2, 2, 3, 3, 3]));  
// Output: { '1': 1, '2': 2, '3': 3 }

