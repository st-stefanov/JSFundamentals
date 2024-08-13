function solve(inputNumber) {
    let totalSum = 0;
    const firstDigit = inputNumber % 10;
    let allDigitsAreTheSame = true

    while (inputNumber > 0) {
        const currentDigit = inputNumber % 10

        if (firstDigit != currentDigit){
            allDigitsAreTheSame = false
        }
        totalSum += inputNumber % 10
        inputNumber = Math.floor(inputNumber / 10);
    }

    console.log(allDigitsAreTheSame)
    console.log(totalSum)
}
solve(12345)
solve(7777)