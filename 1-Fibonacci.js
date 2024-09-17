function verificationFibonacci(number) {
    let previous = 0;
    let current = 1;

    while (current < number) {
        const next = previous + current;
        previous = current;
        current = next;
    }

    if (current === number) {
        console.log(number + " pertence à sequência de Fibonacci");
    } else {
        console.log(number + " não pertence à sequência de Fibonacci");
    }
}

const numbersVerification = [28, 13];

numbersVerification.forEach(number => verificationFibonacci(number));
