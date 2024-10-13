// function first2dArray(N, M, arr) {
//     for (let i = 0; i < N; i++) {
//         let row = "";
//         for (let j = 0; j < M; j++) {
//             row += arr[i][j] + " "; // Collect elements with a space
//         }
//         console.log(row.trim()); // Print each row after trimming extra space
//     }
// }

// // Example usage:
// const N = 3, M = 4;
// const arr = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12]
// ];

// first2dArray(N, M, arr);

// function sumOfRows(N, M, arr) {
//     for (let i = 0; i < N; i++) {
//         let rowSum = 0; // Initialize sum for each row
//         for (let j = 0; j < M; j++) {
//             rowSum += arr[i][j]; // Add elements in the row
//         }
//         console.log(rowSum); // Print the row sum
//     }
// }

// // Example usage:
// const N = 3, M = 4;
// const arr = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12]
// ];

// sumOfRows(N, M, arr);


// function sumOfIndexes(N, M, arr) {
//     for (let i = 0; i < N; i++) {
//         let row = "";
//         for (let j = 0; j < M; j++) {
//             row += i + j + " ";
//         }
//         console.log(row.trim());
//     }
// }

// // Example usage:
// const N = 3, M = 4;
// const arr = []; // arr is not used in this function, but you can pass an empty array.
// sumOfIndexes(N, M, arr);

// function evenSumRows(N, M, arr) {
//     for (let i = 0; i < N; i++) {  
//         let rowSum = 0;
//         for (let j = 0; j < M; j++) {
//             if (arr[i][j] % 2 === 0) {  // Check if the number is even
//                 rowSum += arr[i][j];    // Add even numbers only
//             }
//         }
//         console.log(rowSum);  // Print the sum of even numbers for each row
//     }
// }

// // Example usage:
// const N = 3, M = 3;
// const arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// evenSumRows(N, M, arr);

// function oddSumRows(N, M, arr) {
//     for (let i = 0; i < N; i++) {
//         let rowSum = 0; // Initialize sum for each row
//         for (let j = 0; j < M; j++) {
//             if (arr[i][j] % 2 !== 0) { // Check if element is odd
//                 rowSum += arr[i][j]; // Add odd elements only
//             }
//         }
//         console.log(rowSum); // Print the sum for the current row
//     }
// }

// // Example usage:
// const N = 3, M = 4;
// const arr = [
//     [1, 2, 3, 4],  // Odd sum = 1 + 3 = 4
//     [5, 6, 7, 8],  // Odd sum = 5 + 7 = 12
//     [9, 10, 11, 12] // Odd sum = 9 + 11 = 20
// ];

// oddSumRows(N, M, arr);


function goInZigZag(N, M, matrix) {
    let bag = ""; // Initialize result string

    for (let i = 0; i < N; i++) {
        if (i % 2 !== 0) {  // Odd-indexed rows: left to right
            for (let j = 0; j < M; j++) {
                bag += matrix[i][j] + " ";  // Append element
            }
        } else {  // Even-indexed rows: right to left
            for (let j = M - 1; j >= 0; j--) {
                bag += matrix[i][j] + " ";  // Append element
            }
        }
    }

    console.log(bag.trim());  // Print the result, trimmed to remove trailing space
}

// Example usage:
const N = 3, M = 4;
const matrix = [
    [1, 2, 3, 4],   // Even row: Right to left -> "4 3 2 1"
    [5, 6, 7, 8],   // Odd row: Left to right -> "5 6 7 8"
    [9, 10, 11, 12] // Even row: Right to left -> "12 11 10 9"
];

goInZigZag(N, M, matrix);
