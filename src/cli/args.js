const parseArgs = () => {
    let A = process.argv.slice(2);
    let result = '';
    for (let i = 0; i < (A.length - 1); i = i + 2) {
        result = (`${result}${A[i].slice(2)} is ${A[i + 1]}, `)
    }
    console.log(result.slice(0, -2))
};

parseArgs();