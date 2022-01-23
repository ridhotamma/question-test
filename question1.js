const fishBash = (number) => {
    if (number === 0 || number === null || number === undefined) {
        return []
    }

    let array = []
    for(let i = 0; i <= number; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
            array.push('fish bash')
        } else if(i % 3 == 0) {
            array.push('fish')
        } else if (i % 5 == 0) {
            array.push('bash')
        } else {
            array.push(String(i))
        }
    }
    return array
}

module.exports = fishBash
