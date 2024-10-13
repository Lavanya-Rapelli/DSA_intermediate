function matrixPrimeCheck(N, M, arr) {
    // Helper function to check if a number is prime
    function isprime(num) {
        if (num < 2) return false; // Numbers < 2 are not prime
        for (let i = 2; i * i <= num; i++) { // Loop from 2 to √num
            if (num % i === 0) {
                return false; // Not prime if divisible by i
            }
        }
        return true; // Prime if no divisors found
    }

    let primeCount = 0;

    // Iterate over the matrix to count prime numbers
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (isprime(arr[i][j])) {
                primeCount++;
            }
        }
    }

    console.log(primeCount); // Print the total count of prime numbers
}

// Example usage:
const N = 3, M = 3;
const arr = [
    [2, 3, 4], 
    [5, 6, 7], 
    [8, 9, 11]
];

matrixPrimeCheck(N, M, arr);
