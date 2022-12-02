const parseEnv = () => {
    let A = process.env;
    let result = '';
    for (const key in A) {
        if (key.startsWith('RSS_')) {
            result = `${result}${key}=${A[key]}; `
        }
    }
    console.log(result.slice(0, -2))
};

parseEnv();