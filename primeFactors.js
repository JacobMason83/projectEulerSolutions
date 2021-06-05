// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

const getPrimeFactors =(integer) => {
    const primeArray = [];
    let isPrime;
  
    // Find divisors starting with 2
    for (let i = 2; i <= integer; i++) {
      if (integer % i !== 0) continue;
  
      // Check if the divisor is a prime number
      for (let j = 2; j <= i / 2; j++) {
        isPrime = i % j !== 0;
      }
  
      if (!isPrime) continue;
      // if the divisor is prime, divide integer with the number and store it in the array
      integer /= i
      primeArray.push(i);
    }
    primeArray.sort((a, b) => b - a)
    return primeArray[0]
  }
  
  console.log(getPrimeFactors(600851475143));