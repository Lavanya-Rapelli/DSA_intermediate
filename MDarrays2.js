// function matrixPrimeCheck(N, M, arr) {
//     // Helper function to check if a number is prime
//     function isprime(num) {
//         if (num < 2) return false; // Numbers < 2 are not prime
//         for (let i = 2; i * i <= num; i++) { // Loop from 2 to √num
//             if (num % i === 0) {
//                 return false; // Not prime if divisible by i
//             }
//         }
//         return true; // Prime if no divisors found
//     }

//     let primeCount = 0;

//     // Iterate over the matrix to count prime numbers
//     for (let i = 0; i < N; i++) {
//         for (let j = 0; j < M; j++) {
//             if (isprime(arr[i][j])) {
//                 primeCount++;
//             }
//         }
//     }

//     console.log(primeCount); // Print the total count of prime numbers
// }

// // Example usage:
// const N = 3, M = 3;
// const arr = [
//     [2, 3, 4], 
//     [5, 6, 7], 
//     [8, 9, 11]
// ];

// matrixPrimeCheck(N, M, arr);
// 

// function sumOfCornerColumns(N, M, arr) {
//     let sum = 0;

//     // Iterate through each row
//     for (let i = 0; i < N; i++) {
//         // Add the first column element (j = 0)
//         sum += arr[i][0];

//         // Add the last column element (j = M - 1), if it's different from the first column
//         if (M > 1) {
//             sum += arr[i][M - 1];
//         }
//     }

//     console.log(sum); // Print the total sum
// }

// // Example input
// const N = 4, M = 3;
// const arr = [
//     [1, 2, 3],   // Row 1
//     [4, 5, 6],   // Row 2
//     [7, 8, 9],   // Row 3
//     [10, 11, 12] // Row 4
// ];

// // Call the function with example input
// sumOfCornerColumns(N, M, arr);

// function sumOfCornerColumns(N, M, arr) {
//     let sum = 0;

//     // Iterate through each row
//     for (let i = 0; i < N; i++) {
//         // Add the first column element (j = 0)
//         sum += arr[i][0];

//         // Add the last column element (j = M - 1), if it's different from the first column
//         if (M > 1) {
//             sum += arr[i][M - 1];
//         }
//     }

//     console.log(sum); // Print the total sum
// }

// // Example input
// const N = 4, M = 3;
// const arr = [
//     [1, 2, 3],   // Row 1
//     [4, 5, 6],   // Row 2
//     [7, 8, 9],   // Row 3
//     [10, 11, 12] // Row 4
// ];

// // Call the function with example input
// sumOfCornerColumns(N, M, arr);

// function evenSumColumns(N, M, arr) {
//     for (let j = 0; j < M; j++) { // Iterate over each column
//         let sum = 0; // Initialize the sum for the current column
//         for (let i = 0; i < N; i++) { // Iterate over each row
//             if (arr[i][j] % 2 === 0) { // Check if the element is even
//                 sum += arr[i][j]; // Add even element to the sum
//             }
//         }
//         console.log(sum); // Print the sum of even numbers in the current column
//     }
// }

// // Example input
// const N = 4, M = 3;
// const arr = [
//     [1, 2, 3],   // Row 1
//     [4, 5, 6],   // Row 2
//     [7, 8, 9],   // Row 3
//     [10, 11, 12] // Row 4
// ];

// // Call the function with example input
// evenSumColumns(N, M, arr);


// function oddSumColumns(N, M, arr) {
//     for (let j = 0; j < M; j++) { // Iterate over each column
//         let sum = 0; // Initialize the sum for the current column
//         for (let i = 0; i < N; i++) { // Iterate over each row
//             if (arr[i][j] % 2 !== 0) { // Check if the element is odd
//                 sum += arr[i][j]; // Add odd element to the sum
//             }
//         }
//         console.log(sum); // Print the sum of odd numbers in the current column
//     }
// }

// // Example input
// const N = 4, M = 3;
// const arr = [
//     [1, 2, 3],   // Row 1
//     [4, 5, 6],   // Row 2
//     [7, 8, 9],   // Row 3
//     [10, 11, 12] // Row 4
// ];

// // Call the function with example input
// oddSumColumns(N, M, arr);

// function traverse2dArray(N, M, matrix) {
//     let bag = "";
//     for (let j = 0; j < M; j++) {
//         for (let i = N - 1; i >= 0; i--) {
//             bag += matrix[i][j] + " ";
//         }
//     }
//     console.log(bag);
// }

// // Example input
// const N = 3; // Number of rows
// const M = 4; // Number of columns
// const matrix = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12]
// ];

// // Call the function with the example input
// traverse2dArray(N, M, matrix);


// function nTraversal(matrix) {
//     let n = matrix.length;
//     let bag = ""; // Initialize an empty string for accumulating results

//     if (n === 1) {
//         bag += matrix[0][0]; // If there's only one element, add it to bag
//     } else {
//         // Traverse the first column from bottom to top
//         for (let i = n - 1; i >= 0; i--) {
//             bag += matrix[i][0] + " "; // Add elements to bag with a space
//         }

//         // Traverse the diagonal from (1,1) to (n-2,n-2)
//         for (let i = 1; i < n - 1; i++) {
//             bag += matrix[i][i] + " "; // Add diagonal elements to bag
//         }

//         // Traverse the last column from top to bottom
//         for (let i = n - 1; i >= 0; i--) {
//             bag += matrix[i][n - 1] + " "; // Add elements to bag
//         }
//     }

//     console.log(bag.trim()); // Print the bag, removing any trailing space
// }

// // Example usage
// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// // Call the function with the example matrix
// nTraversal(matrix);

function cirTraversal(matrix, N) {
    let bag = ""; // Initialize an empty string for accumulating results

    // Traverse the first column from bottom to top
    for (let i = N - 1; i >= 0; i--) {
        bag += matrix[i][0] + " "; // Add elements to bag with a space
    }

    // Traverse the top row from left to right
    for (let j = 1; j < N - 1; j++) {
        bag += matrix[0][j] + " "; // Add elements to bag
    }

    // Traverse the last column from top to bottom (excluding the last element)
    for (let i = 0; i < N - 1; i++) {
        bag += matrix[i][N - 1] + " "; // Add elements to bag
    }

    // Traverse the last row from right to left (excluding the first element)
    for (let j = N - 1; j >= 1; j--) {
        bag += matrix[N - 1][j] + " "; // Add elements to bag
    }

    console.log(bag.trim()); // Print the bag, removing any trailing space
}

// Example usage
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Call the function with the example matrix
cirTraversal(matrix, 3);
