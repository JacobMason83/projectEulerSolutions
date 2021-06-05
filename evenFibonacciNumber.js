// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

const evenNumbers = () => {
    let prev = 0
    let current = 1 
    let results = 0
    for (let i = 0; ; i++){
        const next = prev + current
        if(next > 4000000){
            break;
        }

        if(next % 2 == 0) {
           results += next
        }
        prev = current
        current = next

    }
    console.log(results)
    return results
}
evenNumbers()