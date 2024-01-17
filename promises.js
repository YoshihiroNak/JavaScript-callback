// const x = 2
// const y = '5'

function adder(a, b) {
    return a + b
}

function adderPromise(x, y) {
    return new Promise((resolve, reject) => {
        if (typeof x === 'number' && typeof y === 'number') {
            const answer = adder(x, y)
            resolve(answer)
        } else {
            reject('x and y must be a number')
        }
    })
}

// const answer = adder(x, y)

// console.log(calc)
// then() pass resolve(answer) to value // catch() receive reject(error message)
// adderPromise(10, 20)
//     .then(value => {
//         adderPromise(value, 100)
//             .then(answer => console.log(answer))
//     })
//     // .then(value => console.log(value))
//     .catch(err => console.error(err))

    // adderPromise(10, 20)
    // .then(value => {
    //     return adderPromise(value, 100)
    // })
    // .then(value => console.log(value))
    // .catch(err => console.error(err))

    adderPromise(10, 20)
    .then(value => adderPromise(value, 100))
    .then(value => console.log(value))
    .catch(err => console.error(err))

// adderPromise(3.6, 123.45)
//     .then(value => alert(value))
//     .catch(err => console.error(err))

console.log('Not waiting for resolve!')